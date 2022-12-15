import React from 'react'


const FooterSocialIcons = (props) => {
	let URLBase = "/img/shared/social-{icon}.svg";
	if (Object.hasOwnProperty.call(props, 'white')) {
		URLBase = URLBase.replace('{icon}', '{icon}-white');
	}
	if (Object.hasOwnProperty.call(props, 'purple')) {
		URLBase = URLBase.replace('{icon}', '{icon}-purple');
	}

	return (<>
		<li className='list-none inline-block m-1'>
			<a href="https://twitter.com/OrchidProtocol" target="_blank" rel="noopener noreferrer" aria-label="Follow on Twitter" title="Twitter">
				<img src={URLBase.replace('{icon}', "twitter")} alt="Twitter" width="32" height="32" />
			</a>
		</li>
		<li className='list-none inline-block m-1'>
			<a href="https://www.reddit.com/r/orchid/" target="_blank" rel="noopener noreferrer" aria-label="Check out our Subreddit" title="Reddit">
				<img src={URLBase.replace('{icon}', "reddit")} alt="Reddit" width="32" height="32" />
			</a>
		</li>
		<li className='list-none inline-block m-1'>
			<a href="https://discord.gg/invite/GDbxmjxX9F" target="_blank" rel="noopener noreferrer" aria-label="Join us on Discord" title="Discord">
				<img src={URLBase.replace('{icon}', "discord")} style={{ width: "32px", height: "auto" }} alt="Discord" width="32" height="32" />
			</a>
		</li>
		<li className='list-none inline-block m-1'>
			<a href="https://www.t.me/OrchidOfficial" target="_blank" rel="noopener noreferrer" aria-label="Join us on Telegram" title="Telegram">
				<img src={URLBase.replace('{icon}', "telegram")} style={{ width: "32px", height: "auto" }} alt="Telegram" width="32" height="32" />
			</a>
		</li>
		<li className='list-none inline-block m-1'>
			<a href="https://github.com/OrchidTechnologies" target="_blank" rel="noopener noreferrer" aria-label="See the Source" title="Github">
				<img src={URLBase.replace('{icon}', "github")} alt="Github" width="32" height="32" />
			</a>
		</li>
		<li className='list-none inline-block m-1'>
			<a href="https://www.facebook.com/OrchidProtocol" target="_blank" rel="noopener noreferrer" aria-label="Follow on Facebook" title="Facebook">
				<img src={URLBase.replace('{icon}', "facebook")} alt="Facebook" width="32" height="32" />
			</a>
		</li>
		<li className='list-none inline-block m-1'>
			<a href="https://www.youtube.com/channel/UCIH_BKBlNemsCzDhPYZBlHw" target="_blank" rel="noopener noreferrer" aria-label="Follow on YouTube" title="YouTube">
				<img src={URLBase.replace('{icon}', "youtube")} alt="YouTube" width="32" height="32" />
			</a>
		</li>
		<li className='list-none inline-block m-1'>
			<a href="https://www.linkedin.com/company/orchidprotocol" target="_blank" rel="noopener noreferrer" aria-label="Follow on LinkedIn" title="LinkedIn">
				<img src={URLBase.replace('{icon}', "linkedin")} alt="LinkedIn" width="32" height="32" />
			</a>
		</li>
	</>)
}

export default FooterSocialIcons
