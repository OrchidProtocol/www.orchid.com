import React from 'react'
import { Link } from 'gatsby';

import './Navbar.scss';
import { Trans } from 'react-i18next';

class Navbar extends React.Component {

	constructor() {
		super();

		this.state = {
			navigationCollapsed: true,
			languageCollapsed: true,
			js: false,
		}
	}

	componentDidMount() {
		this.setState({
			js: true
		})
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

		return (<div id="nav-root">
			<nav id="nav" className={"section-wide hpad-thin" + (this.state.js ? " js" : "")}>
				<h1 id="nav-home">
					<Link className="inline-block" to="/" aria-label="Home" title="Home">
						<img width="93" height="24" src="/img/shared/orchid-logo-text.svg" alt="Orchid logo" className="no-mobile" />
						<img width="35" height="30" src="/img/shared/orchid-logo-small.svg" alt="Orchid logo" className="mobile-only" />
					</Link>
				</h1>
				<div className={"nav-menu" + (this.state.js ? " js" : "") + (this.state.navigationCollapsed ? "" : " open")}>
					<div id="nav-flyout-header" className="mobile-only">
						<button id="nav-flyout-close" className="phantom-btn" onKeyPress={this.navbarClickListener.bind(this)} onClick={this.navbarClickListener.bind(this)}>
							<img width="22" height="24" alt="Close" src="/img/shared/close.svg" />
						</button>
					</div>
					<ul className="nav-list phantom-list">
						<li className="mobile-only"><Link to="/" className="phantom-a"><Trans>Home</Trans></Link></li>
						<li><Link to="/join" className="phantom-a"><Trans>Create Account</Trans></Link></li>
						<li><Link to="/how-it-works" className="phantom-a"><Trans>How It Works</Trans></Link></li>
						<li><Link to="/oxt" className="phantom-a"><Trans>OXT</Trans></Link></li>
						<li><Link to="/about-us" className="phantom-a"><Trans>About</Trans></Link></li>
						<li><a className="phantom-a" href={t("https://blog.orchid.com/")}><Trans>Blog</Trans></a></li>
						<li><Link to="/contact" className="phantom-a"><Trans>Contact</Trans></Link></li>
						<li className="navbar-language-selector">
							<span className="phantom-a">
								<img alt="" style={{ verticalAlign: "middle", margin: "0 5px 3px 0" }} width="20" height="20" src="/img/shared/globe.svg" />
								<span>{t('EN')}</span>
								<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.657413 2.3158L3.67908 5.33747C4.13408 5.79247 4.86908 5.79247 5.32408 5.33747L8.34575 2.3158C9.08075 1.5808 8.55575 0.320801 7.51741 0.320801H1.47408C0.435747 0.320801 -0.0775865 1.5808 0.657413 2.3158Z" fill="#766D86" />
								</svg>
							</span>
							<ul className="navbar-language-selector-list">
								<li id="navbar-language-selector-list-item-first"><a className="phantom-a" href="/ko/">한국어</a></li>
								<li><a className="phantom-a" href="/">English</a></li>
								<li><a className="phantom-a" href="/ru/">русский</a></li>
								<li><a className="phantom-a" href="/ja/">日本</a></li>
								<li><a className="phantom-a" href="/zh/">中文</a></li>
								<li><a className="phantom-a" href="/id/">Indonesian</a></li>
							</ul>
						</li>
					</ul>
				</div>

				<a className="nav-download" href="/get-orchid">
					<button className="btn-secondary">
						<Trans>
							Get Orchid
						</Trans>
					</button>
				</a>

				<button id="nav-toggle" className="phantom-btn mobile-only" onClick={this.navbarClickListener.bind(this)}>
					<img width="25" height="22" alt="Toggle Navigation" src="/img/shared/hamburger.svg" />
				</button>
			</nav>
			<div id="nav-pin" className="mobile-only"></div>
		</div>)
	}
}

export default Navbar
