const parseString = require('xml2js').parseString;
const fetch = require('node-fetch');
const fs = require('fs');
const cheerio = require('cheerio');

const urlStruct = "https://raw.githubusercontent.com/OrchidProtocol/www.orchid.com/legacy/src/i18n/messages.{locale}.xlf";
const locales = [
	'en',
	'es',
	'fr',
	'hi',
	'id',
	'it',
	'ja',
	'ko',
	'pt',
	'pt-BR',
	'ru',
	'tr',
	'zh',
]

const baseJSON = {};
baseJSON.common = JSON.parse(fs.readFileSync('./extractedTranslations/en/common.json', 'utf8'))

function cleanup(str) {
	return str.replace(/\t/g, '').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
}

async function run() {
	for (let i = 0; i < locales.length; i++) {
		const pageText = await fetch(urlStruct.replace('{locale}', locales[i])).then(res => res.text());
		const $ = cheerio.load(pageText, {
			xmlMode: true,
		});

		const localeKeys = {};
		const units = $('body').find('trans-unit');
		for (let index = 0; index < units.length; index++) {
			const unit = units[index];
			let id = unit.attributes[0].value;
			if (id.length === 40) {
				id = cleanup($(unit).find('source').text());
			} else {
				id = `@@${id}`;
			}
			if (baseJSON.common[id]) {
				localeKeys[id] = cleanup($(unit).find('target').text());
			} else {
				console.log(`Missing: ${id}`);
			}
		}
		fs.writeFileSync(`./src/locales/${locales[i]}/translation.json`, JSON.stringify(localeKeys, null, 4));
	}
}

run();