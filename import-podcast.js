const parseString = require('xml2js').parseString;
const fetch = require('node-fetch');
const fs = require('fs');
const cheerio = require('cheerio');

const oldRoutes = [
	"podcast/episode-1-interview-with-rich-starpoli",
	"podcast/episode-2-vinny-lingham",
	"podcast/episode-3-jyri-engestrom",
	"podcast/episode-4-roger-ver",
	"podcast/episode-5-jehan-chu",
	"podcast/episode-6-paul-veradittakit",
	"podcast/episode-7-alexander-lloyd",
	"podcast/episode-8-cindy-cohn",
	"podcast/episode-9-david-chaum",
	"podcast/episode-10-ben-bartlett",
	"podcast/episode-11-richard-muirhead",
	"podcast/episode-12-ken-seiff",
	"podcast/episode-13-brian-j-fox",
	"podcast/episode-14-juan-gilbert",
	"podcast/episode-15-val-mack",
	"podcast/episode-16-jason-brett",
	"podcast/episode-17-dawn-song",
	"podcast/episode-18-alex-gluchowski",
	"podcast/episode-19-david-pan",
	"podcast/episode-20-neeraj-khandelwal",
	"podcast/episode-21-felipe-erazo",
	"podcast/episode-22-adriana-hamacher",
	"podcast/episode-23-roneil-rumburg",
	"podcast/episode-24-brad-kam",
	"podcast/episode-25-roger-huang",
	"podcast/episode-26-anne-ahola-ward",
	"podcast/episode-27-kurt-rohloff",
	"podcast/episode-28-andreas-antonopoulos",
	"podcast/episode-29-yaniv-tal",
	"podcast/episode-30-franck-nouyrigat",
	"podcast/episode-31-jamie-king",
	"podcast/episode-32-nathan-wilcox",
	"podcast/episode-33-john-redgrave",
	"podcast/episode-34-joe-toscano",
	"podcast/episode-35-leigh-honeywell",
	"podcast/episode-36-lance-vick",
	"podcast/episode-37-david-henklel-wallace",
	"podcast/episode-38-miko-matsumura",
	"podcast/episode-39-gregory-landua",
	"podcast/episode-40-marvin-tong",
	"podcast/episode-41-aibek-esengulov",
	"podcast/episode-42-tor-bair",
	"podcast/episode-43-emin-gun-sirer",
	"podcast/episode-44-bill-barhydt",
	"podcast/episode-45-derek-e-silva",
	"podcast/episode-46-edward-snowden",
	"podcast/episode-47-kara-swisher",
	"podcast/episode-48-avichal-garg",
	"podcast/episode-49-dragana-kaurin",
	"podcast/episode-50-rebecca-wexler",
	"podcast/episode-51-greg-osuri",
	"podcast/episode-52-gbenga-sesan",
	"podcast/episode-53-jason-pielemeier",
	"podcast/episode-54-brittany-piovesan",
	"podcast/episode-55-john-gleeson",
	"podcast/episode-56-michael-caster",
	"podcast/episode-57-kean-birch",
	"podcast/episode-58-jim-harper",
	"podcast/episode-59-raullen-chai",
	"podcast/episode-60-berhan-taye",
	"podcast/episode-61-dr-gabriela-zanfir-fortuna",
	"podcast/episode-62-leo-scwartz",
	"podcast/episode-63-julie-owono",
	"podcast/episode-64-sonny-king",
	"podcast/episode-65-alexander-klus",
	"podcast/episode-66-jason-rieff",
	"podcast/episode-67-brett-solomon",
	"podcast/episode-68-julian-zawistowski",
]

async function run() {
	/*const xml = await fetch('https://followthewhiterabbit.libsyn.com/rss').then(res => res.text());

	parseString(xml, function (err, result) {
		console.dir();
		for (let i = 0; i < result.rss.channel[0].item.length; i++) {
			const slug = result.rss.channel[0].item[i].title[0].toLowerCase().replace(/[^a-z0-9]/g, "-");
			const markdown = `---
templateKey: podcast-episode
public: true
url: ${slug}
title: ${result.rss.channel[0].item[i].title[0]}
description: ${result.rss.channel[0].item[i].description[0].replace(/<\/?[^>]+(>|$)/g, "").replace(/  /g, " ")}
date: ${new Date(result.rss.channel[0].item[i].pubDate[0]).getTime()}
featuredImage: ${result.rss.channel[0].item[0]["itunes:image"][0].$.href}
---`;
			fs.writeFileSync(`./src/pages/podcast/${slug}.md`, markdown);
		}
	});*/

	for (let i = 0; i < oldRoutes.length; i++) {
		const pageText = await fetch('https://www.orchid.com/' + oldRoutes[i]).then(res => res.text());
		const $ = cheerio.load(pageText);
		const title = $(".card-body h3").text();
		const description = $(".card-body p").text();
		const cardImage = $(".card-image-wrap div").attr("style").split("url(/assets")[1].split(")")[0];
		const socialImage = $("head meta[property='og:image']").attr("content");
		let date = new Date($(".card-body div:first-child").text());

		const urls = [];
		const platformContainer = $(".card-footer");
		for (let o = 0; o < platformContainer.children().length; o++) {
			urls.push(platformContainer.children()[o].attribs.href);
		}
		const formattedUrls = urls.map(url => ` - ${url}`).join("\n");

		const markdown = `---
templateKey: podcast-episode
public: true
url: ${oldRoutes[i]}
title: "${title}"
description: ${description}
date: ${date.getTime()}
featuredimage: ${cardImage}
socialimage: ${socialImage}
platformurls:
${formattedUrls}
---`;
		fs.writeFileSync(`./src/pages/${oldRoutes[i]}.md`, markdown);
	}
}

run();