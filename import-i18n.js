const fetch = require('node-fetch');
const fs = require('fs');
const cheerio = require('cheerio');

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
	'ptbr',
	'ru',
	'tr',
	'zh',
]

const baseJSON = {};
try {
	baseJSON.common = JSON.parse(fs.readFileSync('./extractedTranslations/en/common.json', 'utf8'))
	for (const key in baseJSON.common) {
		if (Object.hasOwnProperty.call(baseJSON.common, key)) {
			if (baseJSON.common[key] === '') {
				baseJSON.common[key] = key;
			}
		}
	}
	fs.writeFileSync('./extractedTranslations/en/common.json', JSON.stringify(baseJSON.common, null, 2), 'utf8');
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

const allImportedStrings = [];

async function run() {
	for (let i = 0; i < locales.length; i++) {
		if (locales[i] !== 'en') {
			let crowdinImport = fs.readFileSync(`./translationImport/common_${locales[i].replace('ptbr', 'pt_BR')}.json`, 'utf8');
			crowdinImport = crowdinImport.replace(/\s\s+/g, ' ').replace(/WireGuard \./g, 'WireGuard.');

			crowdinImport = JSON.parse(crowdinImport);

			const needsUpdate = {};
			let localeKeys = {};
			try {
				localeKeys = JSON.parse(fs.readFileSync('./src/locales/' + locales[i] + '/translation.json', 'utf8'))
			} catch (e) { }
			const newMissingKeys = {};

			for (const key in crowdinImport) {
				if (Object.hasOwnProperty.call(crowdinImport, key)) {
					const target = crowdinImport[key];

					allImportedStrings.push({
						id: key,
						target,
						source: key,
					});
				}
			}

			// initial exact match
			for (let index = 0; index < allImportedStrings.length; index++) {
				let { target, source, id } = allImportedStrings[index];
				if (baseJSON.common[id]) {
					localeKeys[id] = target;
				} else if (baseJSON.common[source]) {
					localeKeys[source] = target;
				} else if (searchForNoHTML(source, baseJSON.common) !== null) {
					localeKeys[searchForNoHTML(source, baseJSON.common)] = target;
					needsUpdate[searchForNoHTML(source, baseJSON.common)] = target;
				} else {
					newMissingKeys[id] = target;
				}
			}

			for (const missingKey in newMissingKeys) {
				if (Object.hasOwnProperty.call(newMissingKeys, missingKey)) {

					const closeStrings = [];
					for (const baseKey in baseJSON.common) {
						if (Object.hasOwnProperty.call(baseJSON.common, baseKey)) {
							const target = baseJSON.common[baseKey];
							const source = baseKey;

							const similarity = string_similarity(source, missingKey);
							if (similarity > 0.75) {
								closeStrings.push({
									similarity,
									source,
									target,
									missingKey,
									missingTarget: newMissingKeys[missingKey],
								});
							}
						}
					}
					closeStrings.sort((a, b) => b.similarity - a.similarity);
					if (closeStrings.length > 0) {
						const { missingTarget } = closeStrings[0];
						localeKeys[missingKey] = missingTarget;
						delete newMissingKeys[missingKey];
						console.log('Close enough', missingKey, closeStrings[0]);
					}
				}
			}

			for (const key in localeKeys) {
				if (Object.hasOwnProperty.call(localeKeys, key)) {
					const value = localeKeys[key];
					if (value === '') {
						delete localeKeys[key];
						newMissingKeys[key] = value;
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
			fs.writeFileSync(`./pendingTranslations/${locales[i]}/other/not-translated.json`, JSON.stringify(modernMissingKeys, null, 4));
			fs.writeFileSync(`./pendingTranslations/${locales[i]}/other/new-not-imported.json`, JSON.stringify(newMissingKeys, null, 4));

			try {
				const pendingKeys = JSON.parse(fs.readFileSync(`./pendingTranslations/${locales[i]}/needsupdate.json`, 'utf8'));
				for (const key in pendingKeys) {
					if (pendingKeys[key] !== needsUpdate[key] && pendingKeys.hasOwnProperty(key) && needsUpdate.hasOwnProperty(key)) {
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

function string_similarity(s1, s2) {
	var longer = s1;
	var shorter = s2;
	if (s1.length < s2.length) {
		longer = s2;
		shorter = s1;
	}
	var longerLength = longer.length;
	if (longerLength == 0) {
		return 1.0;
	}
	return (longerLength - edit_distance(longer, shorter)) / parseFloat(longerLength);
}
function edit_distance(s1, s2) {
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();

	var costs = new Array();
	for (var i = 0; i <= s1.length; i++) {
		var lastValue = i;
		for (var j = 0; j <= s2.length; j++) {
			if (i == 0)
				costs[j] = j;
			else {
				if (j > 0) {
					var newValue = costs[j - 1];
					if (s1.charAt(i - 1) != s2.charAt(j - 1))
						newValue = Math.min(Math.min(newValue, lastValue),
							costs[j]) + 1;
					costs[j - 1] = lastValue;
					lastValue = newValue;
				}
			}
		}
		if (i > 0)
			costs[s2.length] = lastValue;
	}
	return costs[s2.length];
}

run();