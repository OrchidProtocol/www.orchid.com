const { readFileSync, existsSync, writeFileSync, mkdirSync, createWriteStream, copyFileSync, unlink } = require("fs");
const { join } = require("path");
const sharp = require('sharp');
const http = require('http');
const fetch = require('node-fetch');


const SRC_FOLDER = join(process.cwd(), "src");
const ASSETS_FOLDER = join(SRC_FOLDER, "assets");

const fallback = () => {
	writeFileSync(join(ASSETS_FOLDER, 'blog.json'), JSON.stringify([]));
}
fallback();

if (!existsSync(join(ASSETS_FOLDER, '/img/blog-integration/')))
	mkdirSync(join(ASSETS_FOLDER, '/img/blog-integration/'))

const getSmallURL = (url) => {
	return url.replace(/.png|.jpg|.webp/, '-small.jpg');
}

const downloadBlogImage = (url, index = 0) => {
	const output = join(ASSETS_FOLDER, '/img/blog-integration/', url.split('/')[url.split('/').length - 1]);

	// introduce a timeout to prevent script from freezing during disk access issues
	setTimeout(() => {
		const stream = createWriteStream(output);
		fetch(url)
			.then(res => {
				res.body.pipe(stream);
				stream.on('close', () => {
					console.log('downloaded', url);
					sharp(output)
						.resize(670)
						.jpeg({ quality: 60 })
						.toFile(getSmallURL(output), (err, info) => {
							if (err) console.log(err, info);
						});
				})
			})
			.catch(e => {
				throw e;
			})
	}, index * 100);

	return getSmallURL(output);
}


if (!existsSync(join(ASSETS_FOLDER, '/img/brella-integration/')))
	mkdirSync(join(ASSETS_FOLDER, '/img/brella-integration/'))
let brellaOffset = 0;
const downloadBrellaImage = (url) => {
	const output = join(ASSETS_FOLDER, '/img/brella-integration/', url.split('/')[url.split('/').length - 1]);

	// introduce a timeout to prevent script from freezing during disk access issues
	setTimeout(() => {
		const stream = createWriteStream(output);
		fetch(url)
			.then(res => {
				res.body.pipe(stream);
				stream.on('close', () => {
					console.log('downloaded', url);
					sharp(output)
						.resize(120, 120)
						.jpeg({ quality: 75 })
						.toFile(getSmallURL(output), (err, info) => {
							if (err) console.log(err, info);
						});
				})
			})
			.catch(e => {
				throw e;
			})
	}, brellaOffset++ * 100);

	return getSmallURL(output);
}

let domain = 'blog.orchid.com';
if (process.env.BUILD_LOCALE) {
	domain = domain.replace('blog.', `blog.${process.env.BUILD_LOCALE}.`);
}

fetch(`https://${domain}/feed-1.json`)
	.then(response => response.json())
	.then(data => {
		try {
			const output = new Array();
			for (let index = 0; index < Math.min(7, data.items.length); index++) {
				const string = `https://${domain}` + data.items[index].featuredimage;
				const destination = downloadBlogImage(string, index);
				data.items[index].url = `https://${domain}/${data.items[index].url}`;
				output.push(data.items[index]);

				output[output.length - 1].featuredimage = destination.substr(SRC_FOLDER.length);
			}
			writeFileSync(join(ASSETS_FOLDER, 'blog.json'), JSON.stringify(output));
		} catch (e) { fallback() }
	})
	.catch(fallback);


writeFileSync(join(ASSETS_FOLDER, 'brella-priv8.json'), JSON.stringify({}));
fetch(`https://api.brella.io/api/aalto/events/priv8/time_slots`)
.then(response => response.json())
.then(data => {

	const output = {};
	for (let index = 0; index < data.included.length; index++) {
		const element = data.included[index];
		if (element && element.attributes && element.attributes['photo-url']) {
			const imagePath = downloadBrellaImage(element.attributes['photo-url']);
			let name = '';
			if (element.attributes['honorific'] !== null) {
				name += element.attributes['honorific'] + ' ';
			}
			if (element.attributes['first-name'] !== null) {
				name += element.attributes['first-name']
			}
			if (element.attributes['middle-name'] !== null) {
				name += ' ' + element.attributes['middle-name']
			}
			if (element.attributes['last-name'] !== null) {
				name += ' ' + element.attributes['last-name']
			}
			name = name.replace(/  /g, ' ');
			output[element.id] = {
				name,
				image: imagePath.split('/')[imagePath.split('/').length - 1],
			}
		} else {
			output[element.id] = {
				type: element.type,
				role: element.attributes.role,
				speaker: element.relationships.speaker.data.id
			};
		}
	}
	for (const key in output) {
		if (Object.hasOwnProperty.call(output, key)) {
			if (output[key].speaker) {
				output[key].name = output[output[key].speaker].name;
				output[key].image = output[output[key].speaker].image;
			}
		}
	}

	try {
		data.speakers = output;
		writeFileSync(join(ASSETS_FOLDER, 'brella-priv8.json'), JSON.stringify(data));
	} catch (e) { }
})