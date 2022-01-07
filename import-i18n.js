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

		let localeKeys = {};
		try {
			JSON.parse(fs.readFileSync('./src/locales/' + locales[i] + '/translation.json', 'utf8'))
		} catch (e) { }
		const missingKeys = {};
		const units = $('body').find('trans-unit');
		for (let index = 0; index < units.length; index++) {
			const unit = units[index];
			const target = cleanup($(unit).find('target').text());
			const source = cleanup($(unit).find('source').text());
			let id = unit.attributes[0].value;

			if (target !== source) {
				if (id.length === 40) {
					id = source;
				} else {
					id = `@@${id}`;
				}
				if (baseJSON.common[id]) {
					localeKeys[id] = target;
				} else if (baseJSON.common[source]) {
					localeKeys[source] = target;
				} else {
					missingKeys[id] = target;
				}
			}
		}
		fs.writeFileSync(`./src/locales/${locales[i]}/translation.json`, JSON.stringify(localeKeys, null, 4));
		fs.writeFileSync(`./src/locales/${locales[i]}/missing.json`, JSON.stringify(missingKeys, null, 4));

	}
}

run();