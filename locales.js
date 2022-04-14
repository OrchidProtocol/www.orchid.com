const locales = {
	array: [],
	names: [
		{
			key: 'en',
			name: 'English',
		},
		{
			key: 'es',
			name: 'Español',
		},
		{
			key: 'ua',
			name: 'Ukrainian',
		},
		{
			key: 'fr',
			name: 'Français',
		},
		{
			key: 'hi',
			name: 'हिंदी',
		},
		{
			key: 'id',
			name: 'Bahasa Indonesia',
		},
		{
			key: 'it',
			name: 'Italiano',
		},
		{
			key: 'ja',
			name: '日本語',
		},
		{
			key: 'ko',
			name: '한국어',
		},
		{
			key: 'pt',
			name: 'Português',
		},
		{
			key: 'ptbr',
			name: 'Português do Brasil',
		},
		{
			key: 'ru',
			name: 'Русский',
		},
		{
			key: 'tr',
			name: 'Türkçe',
		},
		{
			key: 'zh',
			name: '中文',
		},
	]
};

for (let index = 0; index < locales.names.length; index++) {
	const element = locales.names[index];
	locales.array.push(element.key);
}

module.exports = locales;