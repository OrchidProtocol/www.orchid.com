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
try {
	baseJSON.common = JSON.parse(fs.readFileSync('./extractedTranslations/en/common.json', 'utf8'))
} catch (e) {
	console.log('No common.json found');
}

function cleanup(str) {
	return str.replace(/\t/g, '').replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
}

function searchForNoHTML(string, object) {
	for (let key in object) {
		if (object[key].replace(/(<([^>]+)>)/ig, '') === string) {
			return key;
		}
	}
	return null;
}

async function run() {
	for (let i = 0; i < locales.length; i++) {
		if (locales[i] !== 'en') {
			let pageText = await fetch(urlStruct.replace('{locale}', locales[i])).then(res => res.text());
			pageText = pageText.replace(/WireGuard \./g, 'WireGuard.');
			const $ = cheerio.load(pageText, {
				xmlMode: true,
			});

			const needsUpdate = {};
			let localeKeys = {};
			try {
				localeKeys = JSON.parse(fs.readFileSync('./src/locales/' + locales[i] + '/translation.json', 'utf8'))
			} catch (e) { }
			const legacyMissingKeys = {};
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
					} else if (searchForNoHTML(source, baseJSON.common) !== null) {
						localeKeys[searchForNoHTML(source, baseJSON.common)] = target;
						needsUpdate[searchForNoHTML(source, baseJSON.common)] = target;
					} else {
						legacyMissingKeys[id] = target;
					}
				}
			}

			fs.mkdirSync(`./pendingTranslations/${locales[i]}/other`, { recursive: true });

			const modernMissingKeys = {};
			for (const key in baseJSON.common) {
				if (Object.hasOwnProperty.call(baseJSON.common, key)) {
					const text = baseJSON.common[key];
					if (!localeKeys[key]) {
						modernMissingKeys[key] = text;
						needsUpdate[key] = text;
					}
				}
			}
			console.log(`${locales[i]} missing: ${Object.keys(modernMissingKeys).length}`);
			fs.writeFileSync(`./pendingTranslations/${locales[i]}/other/legacy-not-imported.json`, JSON.stringify(legacyMissingKeys, null, 4));

			try {
				const pendingKeys = JSON.parse(fs.readFileSync(`./pendingTranslations/${locales[i]}/needsupdate.json`, 'utf8'));
				for (const key in pendingKeys) {
					if (pendingKeys[key] !== needsUpdate[key]) {
						localeKeys[key] = pendingKeys[key];
						delete needsUpdate[key];
					}
				}
			} catch (e) { }
			fs.writeFileSync(`./pendingTranslations/${locales[i]}/needsupdate.json`, JSON.stringify(needsUpdate, null, 4));
			fs.writeFileSync(`./src/locales/${locales[i]}/translation.json`, JSON.stringify(localeKeys, null, 4));
		}
	}
}

run();