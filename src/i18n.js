import i18n from "i18next";
export const defaultLocale = "en";
export const defaultNamespace = "common";

export const options = {
	fallbackLng: defaultLocale,
	ns: [defaultNamespace],
	supportedLngs: ['en', 'es', 'fr', 'hi', 'id', 'it', 'ja', 'ko', 'pt', 'pt-BR', 'ru', 'tr', 'zh'],
	load: "currentOnly",
	defaultNS: defaultNamespace,
	keySeparator: false,

	debug: false,

	interpolation: {
		escapeValue: false // not needed for react!!
	},

	react: {
		wait: false
	},

	initImmediate: false // Important for SSR to work
};

const i18nFunction = () => {
	i18n.init(options);
	return i18n;
};

export default i18nFunction;