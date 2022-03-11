import React from 'react'
import IndexCard from './IndexCard';

const tweetPool = [
	{
		body: `"Orchid’s VPN could be very useful from a point of view of freedom."\n$OXT #OrchidProtocol\nExcellent read: https://beincrypto.com/everything-is-an-economy-orchid-ceo-steven-waterhouse/`,
		username: '@justinsanger',
		link: 'https://twitter.com/justinsanger/status/1380986189503664131',
	},
	{
		body: `Some 3 protocol is already 🦋 $OXT \n & like $BAT - Orchid is real tech, people, & usecase. It is critical that the world see & feel #blockchain & #web3 - the GENIUS behind these companies cannot be overstated. \n"Introducing Nanopayments" by @OrchidProtocol \n https://blog.orchid.com/introducing-nanopayments/`,
		username: '@justinsanger',
		link: 'https://twitter.com/justinsanger/status/1374819929036324874',
	},
	{
		body: `So proud of @OrchidProtocol getting listed in the Apple app store! Privacy and internet access should be synonymous, and Orchid's decentralized VPN is a key step forward. I'm going to try a week of #OrchidAlwaysOn and keep my VPN running in the background.`,
		username: '@collectionist',
		link: 'https://twitter.com/collectionist/status/1281442941186129920',
	},
	{
		body: `Reading @OrchidProtocol white paper. I love the elegance of probabilistic micro payments on ethereum.`,
		username: '@KyleSamani',
		link: 'https://twitter.com/KyleSamani/status/925449001012428800',
	},
	{
		body: `Orchid is not your typical VPN, but for cryptocurrency fans looking for anonymity, it could be the right choice. Here's a review: https://macworld.com/article/3598769/orchid-vpn-review.html`,
		username: '@macworld',
		link: 'https://twitter.com/macworld/status/1357359872371752961',
	},
	{
		body: `Bottom line, I love @OrchidProtocol because it fights contact tracing and illegal surveillance. These are the projects I want to support. This is technology I believe in $OXT`,
		username: '@amtvmedia',
		link: 'https://twitter.com/amtvmedia/status/1314433632468004864',
	},
	{
		body: `The great things about Orchid VPN?\n✨ Raises the bar on VPN privacy\n✨ Handles heavy media reliably\n✨ Integrates with other VPNs \nhttps://cnet.co/2KR4REE`,
		username: '@CNET',
		link: 'https://twitter.com/CNET/status/1341644256398761984',
	},
	{
		body: `Congratulations to @bloqinc partner @OrchidProtocol for earning a place on @CNET's 2020 Innovation Awards! \n "In 2020, a new decentralized Blockchain-powered VPN called Orchid is changing the balance of power to give the little people some more control."`,
		username: '@bloqinc',
		link: 'https://twitter.com/bloqinc/status/1341866307185217543',
	},
	{
		body: `"Orchid’s mission is to build open-source software that keeps the Internet open and accessible — a natural resource for everyone, everywhere.” - @CoinDesk \n $OXT #VPN`,
		username: '@cmorquechomx',
		link: 'https://twitter.com/cmorquechomx/status/1300407743560527873',
	},
	{
		body: `@OrchidProtocol aims to build open-source software that keeps the Internet open and accessible — a natural resource for everyone, everywhere. \n Orchid joins #ConsensusDistributed Foundations, our new track for communities: \n https://www.coindesk.com/events/consensus-2020/`,
		username: '@CoinDesk',
		link: 'https://twitter.com/CoinDesk/status/1258815230500573184',
	},
	{
		body: `YEAR IN REVIEW: "For systems to be private they should be end-to-end encrypted and decentralized," says @deseventral @orchidprotocol. \n #privacyplease`,
		username: '@CoinDesk',
		link: 'https://twitter.com/CoinDesk/status/1340277363570053122',
	},
	{
		body: `On the #consensusdistributed Foundations track, @bloqinc co-founder. @matthewroszak talks privacy with @deseventral. Learn more about @bloqinc’s work with @orchidprotocol — staking, VPN bandwidth, and nodes — here: https://sync.bloq.com/bloq-and-the-orchid-network-privacy-in-the-tokenized-future/ #vpn #privacy @coindesk`,
		username: '@bloqinc',
		link: 'https://twitter.com/bloqinc/status/1259845722289078272',
	},
	{
		body: `At the beginning of 2019, I joined a small, pre-launch startup called Orchid Labs to help create a crypto powered VPN that puts users in control of their privacy.`,
		username: '@nathanhandler',
		link: 'https://twitter.com/nathanhandler/status/1305222003440324608',
	},
	{
		body: `Man all you #NBA players need to just use #Orchid VPN and say whatever you guys want. No one will be able to locate your messages calls etc. $oxt https://orchid.com`,
		username: '@mnalizad',
		link: 'https://twitter.com/mnalizad/status/1292954021125398530',
	},
];

function shuffle(array) {
	let index = array.length, randomIndex;
	while (index !== 0) {
		randomIndex = Math.floor(Math.random() * index);
		index--;
		[array[index], array[randomIndex]] = [
			array[randomIndex], array[index]];
	}
	return array;
}
const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
const linkLengthLimit = 15;
const cleanLink = (link) => {
	return link.replace('https://', '').replace('www.', '').replace(/\/$/, '');
};
const addLinks = txt => txt.split(" ").map((part, index) => {
	if (URL_REGEX.test(part)) {
		return <a key={index} className='mr-1' href={part} target="_blank" rel="noreferrer">{cleanLink(part).length > linkLengthLimit ? cleanLink(part).substr(0, linkLengthLimit) + '...' : cleanLink(part)}</a>;
	} else if (part.startsWith('@')) {
		return <a key={index} className='mr-1' href={`https://twitter.com/${part.substr(1)}`} target="_blank" rel="noreferrer">{part}</a>;
	} else if (part.startsWith('#')) {
		return <a key={index} className='mr-1' href={`https://twitter.com/hashtag/${part.substr(1)}`} target="_blank" rel="noreferrer">{part}</a>;
	} else if (part.startsWith('$') && part.length > 1) {
		return <a key={index} className='mr-1' href={`https://twitter.com/search?q=%24${part.substr(1)}`} target="_blank" rel="noreferrer">{part}</a>;
	}
	return part + " ";
});

const FeaturedTweets = () => {
	const tweets = shuffle(tweetPool).splice(0, 3);
	const TweetElements = tweets.map((tweet, index) => {
		const { body, username, link } = tweet;

		let parsedBody = body;
		// replace "\n" with line breaks
		parsedBody = parsedBody.split('\n');
		parsedBody = parsedBody.map((paragraph, i) => {
			return <p key={i}>{addLinks(paragraph)}</p>;
		});


		return (
			<IndexCard key={index} className='twitter my-4 p-4 pl-5 bg-white text-left'>
				<div>
					{parsedBody}
				</div>
				<div div className='flex items-center mt-4'>
					<div className='rounded-full border-2 border-gray bg-white w-14 h-14 -ml-8 mr-2'>
						<img src="/img/vpn/TweetBunny.png" loading="lazy" width="273" height="201" alt="" className='w-24 ml-3' />
					</div>
					<a href={link} target="_blank" rel="noreferrer">{username}</a>
				</div>
			</IndexCard>
		);
	});
	return <>
		{TweetElements}
	</>
}

export default FeaturedTweets;