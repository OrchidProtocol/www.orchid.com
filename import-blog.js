const { readFileSync, existsSync, writeFileSync, mkdirSync, createWriteStream, copyFileSync, unlink } = require("fs");
const { join } = require("path");

const http = require('http');
const fetch = require('node-fetch');


const SRC_FOLDER = join(process.cwd(), "src");
const ASSETS_FOLDER = join(SRC_FOLDER, "assets");

if (!existsSync(join(ASSETS_FOLDER, '/img/blog-integration/')))
	mkdirSync(join(ASSETS_FOLDER, '/img/blog-integration/'))

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
				})
			})
			.catch(e => {
				throw e;
			})
	}, index * 100);

	return output;
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
			for (let index = 0; index < data.items.length; index++) {
				const string = `https://${domain}` + data.items[index].featuredimage;
				const destination = downloadBlogImage(string, index);
				data.items[index].url = `https://${domain}/${data.items[index].url}`;
				output.push(data.items[index]);

				output[output.length - 1].featuredimage = destination.substr(SRC_FOLDER.length);
			}
			writeFileSync(join(ASSETS_FOLDER, 'blog.json'), JSON.stringify(output));
		} catch (e) { console.error(e) }
	})