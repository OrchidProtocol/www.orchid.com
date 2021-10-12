
const defaultConfig = require('./config.en');
const targetConfig = require(`./config.${process.env.GATSBY_TARGET_LANG || 'en'}`);

const config = Object.assign(defaultConfig, targetConfig);


export default config;