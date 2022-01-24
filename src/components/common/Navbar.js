import React from 'react'
import { Link } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const NavbarWrapper = styled.div`
	z-index: 999;
	position: relative;
	background: white;
`;

const NavbarContent = styled.nav`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	padding: 1rem;
	font-size: 0.75rem;

	@media (max-width: 870px) {
		font-size: 14px;
		&.js {
			position: fixed;
			left: 0;
			right: 0;
			box-sizing: border-box;
			height: 64px;
			background: inherit;
			z-index: 999; // NB: this is because the z-index for #nav-flyout-bkgd is 1000
		}
	}
	@media (min-width: (1200px + 1px)) {
		justify-content: space-between;
	}
`;

const CloseButtonHeader = styled.div`
	margin: -1rem -1rem 0;
	box-sizing: border-box;
	height: 64px;

	&.js {
		display: block;
	}

	& > button {
		margin: 0;
		padding: 1rem;
		width: 100%;
		height: 100%;
		cursor: pointer;
		& > a {
			margin-left: auto;
		}
	}
`;

const NavbarItems = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	a {
		color: inherit;
		text-decoration: none;
	}
	@media (min-width: 871px) {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;

		> li {
			> a {
				position: relative;
				padding: 0.5rem;
			}

			&:active > a::after {
				content: " ";
				position: absolute;
				left: 0.5rem;
				right: 0.5rem;
				bottom: calc(0.5rem - 4px);
				bottom: -3px;
				height: 4px;
				background: var(--orc-purple);
				border-radius: 100vmax;
			}
		}
	}

	@media (max-width: 870px) {
		text-align: right;
		> li {
			> a {
				display: block;
				padding: 0.5rem 0;
				width: 100%;
			}
		}
	}

	> li {
		font-weight: 700;
		text-transform: uppercase;
	}
	li {
		@media (max-width: 870px) {
			padding-top: 10px;
		}
	}

	li.social-button {
		padding-top: 0;

		&.first {
			padding-left: 50px;
		}
	}

	@media (max-width: 800px) {
		li.social-button {
			display: none;
		}

		a {
			padding: 10px 0px;
		}
	}
`;

const LanguageSelector = styled.li`
	cursor: pointer;
	position: relative;

	svg {
		width: 0.75em;
		padding: 0.125em;
		margin-left: 0.25em;
		height: auto;
	}

	@media (min-width: 871px) {
		padding-left: 1rem;
		padding-right: 1rem;
	}
	&:hover > ul {
		@media (min-width: 871px) {
			display: block !important;
			animation-name: navbar-language-selector-animation;
			animation-timing-function: ease-out;
			animation-duration: 0.3s;
		}
	}
`;
const LanguageSelectorList = styled.ul`
	padding: 0;
	@media (min-width: 871px) {
		display: none;
		position: absolute;
		top: 100%;
		top: calc(100% + 0.5rem);
		&::before {
			content: "";
			width: 100%;
			height: 0.5rem;
			position: absolute;
			top: -0.5rem;
			left: 0;
		}
		left: 0%;
		z-index: 100;
		padding: 0.5rem;
		background: #fff;
		box-shadow: 0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
		border-radius: 0.5rem;
	}

	width: auto;
	min-width: 100%;
	list-style: none;
	margin: 0;

	& > li {
		position: relative;
		display: block;
		border-right: 1px var(--orc-gray) solid;
		padding-right: 0.25rem;

		@media (min-width: 871px) {
			padding-right: 0;
			border-right: none;
			text-align: center;

			a {
				padding: 7px 0;
				display: inline-block;
				width: 100%;
			}
		}
	}

	& > li:first {
		@media (min-width: 871px) {
			padding-top: 0;
		}
	}
`;

class Navbar extends React.Component {

	constructor() {
		super();

		this.state = {
			navigationCollapsed: true,
			languageCollapsed: true,
			js: false,
		}

		if (typeof window !== 'undefined') setTimeout(() => this.setState({ js: true }), 0);
	}

	navbarClickListener(e) {
		if (e.type === 'keypress' && (e.key !== 'Enter' && e.key !== ' ')) return;

		this.setState({
			navigationCollapsed: !this.state.navigationCollapsed
		})
	}

	languageClickListener(e) {
		if (e.type === 'keypress' && (e.key !== 'Enter' && e.key !== ' ')) return;

		this.setState({
			languageCollapsed: !this.state.languageCollapsed
		})
	}

	render() {
		return (<NavbarWrapper>
			<NavbarContent className={"section-wide hpad-thin" + (this.state.js ? " js" : "")}>

				{/* Logo */}
				<h1 css={css`
					flex: 1 0 auto;
					@media (min-width: (1200px + 1px)) {
						flex: none;
					}
					line-height: 0px;
					> a {
						margin: -1rem;
						padding: 1rem;
					}
				`}>
					<Link css={css`
						display: inline-block;
					`} to="/" aria-label="Home" title="Home">
						<img width="93" height="24" src="/img/shared/orchid-logo-text.svg" alt="Orchid logo" className="no-mobile" />
						<img width="35" height="30" src="/img/shared/orchid-logo-small.svg" alt="Orchid logo" className="mobile-only" />
					</Link>
				</h1>

				{/* Nav items (And mobile slide-out) */}
				<div css={css`
					@media (min-width: 871px) {
						flex: 0 0 auto;
						flex-grow: 1;
						display: flex;
						justify-content: flex-end;
						//margin: -1rem 0 1rem;
					}
					@media (max-width: 870px) {
						overflow-y: auto;
						margin: 0;
						padding: 0;

						&.animate {
							transition-property: transform;
							transition-duration: 0.3s;
							transition-timing-function: cubic-bezier(0.45, 0.1, 0.75, 0.5);
						}

						&.js {
							position: fixed;
							right: 0;
							top: 0;
							bottom: 0;
							padding: 1rem 1rem 1rem 1rem;
							width: 10rem;
							background: var(--orc-beige-light);
							color: var(--orc-rock-gray);
							transform: translate(100%, 0);
							z-index: 1001; // NB: this is because the z-index for #nav-flyout-bkgd is 1000
						}

						&.open {
							transition-duration: 0.4s;
							transition-timing-function: cubic-bezier(0.25, 0.5, 0.5, 1);
							transform: translate(0, 0);
						}
					}
				`} className={(this.state.js ? "js" : "") + (this.state.navigationCollapsed ? "" : " open")}>
					<CloseButtonHeader className="mobile-only">
						<button className="phantom-btn" onKeyPress={this.navbarClickListener.bind(this)} onClick={this.navbarClickListener.bind(this)}>
							<img width="22" height="24" alt="Close" src="/img/shared/close.svg" />
						</button>
					</CloseButtonHeader>
					<NavbarItems>
						<li className="mobile-only"><Link to="/" i18n="@@Navigation-Home">Home</Link></li>
						<li><Link to="/join" i18n="@@Navigation-Join">Create Account</Link></li>
						<li><Link to="/how-it-works" i18n="@@Navigation-HowItWorks">How It Works</Link></li>
						<li><Link to="/oxt" i18n="@@Navigation-OXT">OXT</Link></li>
						<li><Link to="/about-us" i18n="@@Navigation-About">About</Link></li>
						<li><a href="https://blog.orchid.com/" i18n-href="@@Navigation-Blog-Link" i18n="@@Navigation-Blog">Blog</a></li>
						<li><Link to="/contact" i18n="@@Navigation-Contact">Contact</Link></li>
						<LanguageSelector>
							<span className="phantom-a">
								<img alt="" style={{ verticalAlign: "middle", margin: "0 5px 3px 0" }} width="20" height="20" src="/img/shared/globe.svg" />
								<span i18n="@@NavigationCurrentLanguage">{process.env.GATSBY_TARGET_LANG}</span>
								<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.657413 2.3158L3.67908 5.33747C4.13408 5.79247 4.86908 5.79247 5.32408 5.33747L8.34575 2.3158C9.08075 1.5808 8.55575 0.320801 7.51741 0.320801H1.47408C0.435747 0.320801 -0.0775865 1.5808 0.657413 2.3158Z" fill="#766D86" />
								</svg>
							</span>
							<LanguageSelectorList>
								<li><a i18n="@@LanguageDropdown__Ko" href="//www.ko.orchid.com">한국어</a></li>
								<li><a i18n="@@LanguageDropdown__En" href="//www.orchid.com">English</a></li>
								<li><a i18n="@@LanguageDropdown__Ru" href="//www.ru.orchid.com">русский</a></li>
								<li><a i18n="@@LanguageDropdown__Ja" href="//www.ja.orchid.com">日本</a></li>
								<li><a i18n="@@LanguageDropdown__Zh" href="//www.zh.orchid.com">中文</a></li>
								<li><a i18n="@@LanguageDropdown__Id" href="//www.id.orchid.com">Indonesian</a></li>
							</LanguageSelectorList>
						</LanguageSelector>
					</NavbarItems>
				</div>

				<a css={css`
					display: none;
					& > button:not(.phantom-btn).btn-secondary {
						font-size: 16px;
						padding: 0.05rem 1.5rem;
					}
					@media screen and (min-width: 1201px) {
						display: block;
					}
				`} href="/get-orchid">
					<button className="btn-secondary" i18n="@@Navigation-Download">
						Get Orchid
					</button>
				</a>

				<button css={css`
					margin: -1rem;
					padding: 1rem;
					cursor: pointer;
					:not(.js) > & {
						display: none;
					}
				`} className="phantom-btn mobile-only" onClick={this.navbarClickListener.bind(this)}>
					<img width="25" height="22" alt="Toggle Navigation" src="/img/shared/hamburger.svg" />
				</button>
			</NavbarContent>
			<div css={css`
				height: 64px;
			`} className="mobile-only"></div>
		</NavbarWrapper>)
	}
}
export default Navbar;
