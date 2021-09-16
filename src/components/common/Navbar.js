import React from 'react'

import './Navbar.scss';

class Navbar extends React.Component {

	render() {
		return (<div id="nav-root">
			<nav id="nav" class="section-wide hpad-thin wants-js-class">
				<h1 id="nav-home">
					<a class="inline-block" href="/" aria-label="Home" title="Home">
						<img width="93" height="24" src="/img/shared/orchid-logo-text.svg?v=3" alt="Orchid logo" class="no-mobile" />
						<img width="35" height="30" src="/img/shared/orchid-logo-small.svg" alt="Orchid logo" class="mobile-only" />
					</a>
				</h1>
				<div class="nav-menu wants-js-class">
					<div id="nav-flyout-header" class="mobile-only">
						<button id="nav-flyout-close" class="phantom-btn">
							<img width="22" height="24" alt="Close" src="/img/shared/close.svg" />
						</button>
					</div>
					<ul class="nav-list phantom-list">
						<li class="mobile-only"><a class="phantom-a" href="/" i18n="@@Navigation-Home">Home</a></li>
						<li><a class="phantom-a" href="/join" i18n="@@Navigation-Join">Create Account</a></li>
						<li><a class="phantom-a" href="/how-it-works" i18n="@@Navigation-HowItWorks">How It Works</a></li>
						<li><a class="phantom-a" href="/oxt" i18n="@@Navigation-OXT">OXT</a></li>
						<li><a class="phantom-a" href="/about-us" i18n="@@Navigation-About">About</a></li>
						<li><a class="phantom-a" href="https://blog.orchid.com/" i18n-href="@@Navigation-Blog-Link" i18n="@@Navigation-Blog">Blog</a></li>
						<li><a class="phantom-a" href="/contact" i18n="@@Navigation-Contact">Contact</a></li>
						<li class="navbar-language-selector">
							<input type="checkbox" id="navbar-language-selector-checkbox" name="navbar-language-selector-checkbox" />
							<span class="phantom-a">
								<img alt="" style={{ verticalAlign: "middle", margin: "0 5px 3px 0" }} width="20" height="20" src="/img/shared/globe.svg" />
								<span i18n="@@NavigationCurrentLanguage">{process.env.GATSBY_TARGET_LANG}</span>
								<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.657413 2.3158L3.67908 5.33747C4.13408 5.79247 4.86908 5.79247 5.32408 5.33747L8.34575 2.3158C9.08075 1.5808 8.55575 0.320801 7.51741 0.320801H1.47408C0.435747 0.320801 -0.0775865 1.5808 0.657413 2.3158Z" fill="#766D86" />
								</svg>
							</span>
							<ul class="navbar-language-selector-list">
								<li id="navbar-language-selector-list-item-first"><a i18n="@@LanguageDropdown__Ko" class="phantom-a" href="//www.ko.orchid.com">한국어</a></li>
								<li><a i18n="@@LanguageDropdown__En" class="phantom-a" href="//www.orchid.com">English</a></li>
								<li><a i18n="@@LanguageDropdown__Ru" class="phantom-a" href="//www.ru.orchid.com">русский</a></li>
								<li><a i18n="@@LanguageDropdown__Ja" class="phantom-a" href="//www.ja.orchid.com">日本</a></li>
								<li><a i18n="@@LanguageDropdown__Zh" class="phantom-a" href="//www.zh.orchid.com">中文</a></li>
								<li><a i18n="@@LanguageDropdown__Id" class="phantom-a" href="//www.id.orchid.com">Indonesian</a></li>
							</ul>
						</li>
					</ul>
				</div>

				<a class="nav-download" href="/get-orchid">
					<button class="btn-secondary" i18n="@@Navigation-Download">
						Get Orchid
					</button>
				</a>

				<button id="nav-toggle" class="phantom-btn mobile-only">
					<img width="25" height="22" alt="Toggle Navigation" src="/img/shared/hamburger.svg" />
				</button>
			</nav>
			<div id="nav-pin" class="mobile-only"></div>
		</div>)
	}
}
export default Navbar;
