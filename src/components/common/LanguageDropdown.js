import React from "react";
import styled from '@emotion/styled';
import { useTranslation, Link, useI18next } from 'gatsby-plugin-react-i18next';


const LanguageSelector = styled.li`
	cursor: pointer;
	position: relative;
	color: #766D86;

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
				line-height: 1;
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
const languageKeys = {
	'en': 'English',
	'es': 'Español',
	'fr': 'Français',
	'hi': 'हिंदी',
	'id': 'Bahasa Indonesia',
	'it': 'Italiano',
	'ja': '日本語',
	'ko': '한국어',
	'pt': 'Português',
	'ptBR': 'Português do Brasil',
	'ru': 'Русский',
	'tr': 'Türkçe',
	'zh': '中文',
}
const Navigation = () => {
	const { t } = useTranslation();
	const { languages, originalPath, language } = useI18next()

	return (
		<LanguageSelector>
			<span className="phantom-a">
				<img className='inline-block' alt="" style={{ verticalAlign: "middle", margin: "0 5px 3px 0" }} width="20" height="20" src="/img/shared/globe.svg" />
				<span>{t(language)}</span>
				<svg className='inline-block mx-auto' width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.657413 2.3158L3.67908 5.33747C4.13408 5.79247 4.86908 5.79247 5.32408 5.33747L8.34575 2.3158C9.08075 1.5808 8.55575 0.320801 7.51741 0.320801H1.47408C0.435747 0.320801 -0.0775865 1.5808 0.657413 2.3158Z" fill="#766D86" />
				</svg>
			</span>
			<LanguageSelectorList>
				{languages.map((lng) => (
					<li key={lng}>
						<Link to={originalPath} language={lng}>
							{languageKeys[lng] ? languageKeys[lng] : lng}
						</Link>
					</li>
				))}
			</LanguageSelectorList>
		</LanguageSelector>
	)
};


export default Navigation;
