import React from 'react'
import { Link, Trans } from 'gatsby-plugin-react-i18next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Navigation from './LanguageDropdown';

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
		position: fixed;
		left: 0;
		right: 0;
		box-sizing: border-box;
		height: 64px;
		background: inherit;
		z-index: 999; // NB: this is because the z-index for #nav-flyout-bkgd is 1000
	}
	@media (min-width: (1200px + 1px)) {
		justify-content: space-between;
	}
`;

const CloseButtonHeader = styled.div`
	margin: -1rem -1rem 0;
	box-sizing: border-box;
	height: 64px;

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
		color: #766D86;
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
		const { t } = this.props;

		const NavButton = <button css={css`
			margin: -1rem;
			padding: 1rem;
			cursor: pointer;
		`} className="phantom-btn mobile-only" onClick={this.navbarClickListener.bind(this)}>
			<img width="25" height="22" alt="Toggle Navigation" src="/img/shared/hamburger.svg" />
		</button>

		return (<NavbarWrapper>
			<NavbarContent className={"section-wide hpad-thin"}>

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

						&.open {
							transition-duration: 0.4s;
							transition-timing-function: cubic-bezier(0.25, 0.5, 0.5, 1);
							transform: translate(0, 0);
						}
					}
				`} className={(this.state.navigationCollapsed ? "" : "open")}>
					<CloseButtonHeader className="mobile-only">
						<button className="phantom-btn" onKeyPress={this.navbarClickListener.bind(this)} onClick={this.navbarClickListener.bind(this)}>
							<img width="22" height="24" alt="Close" src="/img/shared/close.svg" />
						</button>
					</CloseButtonHeader>
					<NavbarItems>
						<li className="mobile-only"><Link to="/"><Trans>Home</Trans></Link></li>
						<li><a href="https://account.orchid.com/"><Trans>Account</Trans></a></li>
						<li><Link to="/vpn/"><Trans>VPN</Trans></Link></li>
						<li><Link to="/how-it-works/"><Trans>How It Works</Trans></Link></li>
						<li><Link to="/oxt/"><Trans>OXT</Trans></Link></li>
						<li><Link to="/about-us/"><Trans>About</Trans></Link></li>
						<li><a href={t("https://blog.orchid.com/")}><Trans>Blog</Trans></a></li>
						<li><Link to="/contact/"><Trans>Contact</Trans></Link></li>
						<Navigation />
					</NavbarItems>
				</div >

				<a css={css`
					display: none;
					button.btn-secondary {
						font-size: 16px;
						padding: 0.05rem 1.5rem;
					}
					@media screen and (min-width: 1201px) {
						display: block;
					}
				`} href="/get-orchid">
					<button className="btn-secondary">
						<Trans>Get Orchid</Trans>
					</button>
				</a>

				{this.state.js ? NavButton : <a href="#footer">{NavButton}</a>}
			</NavbarContent >
			<div css={css`
				height: 64px;
			`} className="mobile-only"></div>
		</NavbarWrapper >)
	}
}

export default Navbar
