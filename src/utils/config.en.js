module.exports = {
	lang: 'en',
	siteUrl: 'https://www.orchid.com/',
	main_site: 'https://www.orchid.com/',

	description: 'Stay up to date with Orchid, VPN, and online privacy issues.',
	title: 'Orchid',
	twitter: '@OrchidProtocol',
	feature_image: 'img/social.png',
	logo: 'img/favicon.png',
	logoWidth: 256,
	logoHeight: 256,

	navbar_navigation: [
		{
			url: '/',
			label: 'Home'
		},
		{
			url: '/join',
			label: 'Create Account'
		},
		{
			url: '/how-it-works',
			label: 'How It Works'
		},
		{
			url: '/oxt',
			label: 'OXT'
		},
		{
			url: '/about-us',
			label: 'About'
		},
		{
			url: 'https://blog.orchid.com/',
			label: 'Blog'
		},
		{
			url: '/contact',
			label: 'Contact'
		}
	],

	footer_navigation: [
		{
			url: "/how-it-works",
			label: "How it Works",
		},
		{
			url: "/about-us",
			label: "About Us",
		},
		{
			url: "/contact",
			label: "Contact",
		},
		{
			url: "/download",
			label: "Download",
		},
		{
			url: "/podcast",
			label: "Podcast",
		},
		{
			url: "https://blog.orchid.com/",
			label: 'Blog'
		},
		{
			url: "/whitepaper/english.pdf",
			label: "Whitepaper",
		},
		{
			url: "/partners",
			label: "Partners",
		},
		{
			url: "/faq",
			label: "FAQ",
		},
	],

	/*
	data: PropTypes.shape({
		title: PropTypes.string,
		meta_title: PropTypes.string,
		meta_description: PropTypes.string,
		name: PropTypes.string,
		feature_image: PropTypes.string,
		description: PropTypes.string,
		bio: PropTypes.string,
		profile_image: PropTypes.string,
	}).isRequired,
	settings: PropTypes.shape({
		logo: PropTypes.object,
		description: PropTypes.string,
		title: PropTypes.string,
		twitter: PropTypes.string,
		allGhostSettings: PropTypes.object.isRequired,
	}).isRequired,
	canonical: PropTypes.string.isRequired,
	title: PropTypes.string,
	description: PropTypes.string,
	image: PropTypes.string,
	type: PropTypes.oneOf([`WebSite`, `Series`]).isRequired,*/
}