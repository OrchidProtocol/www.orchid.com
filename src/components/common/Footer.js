import React from 'react'
import { css } from '@emotion/core'
import FooterNavigation from './FooterNavigation'
import FooterSocialIcons from './FooterSocialIcons.js'

import config from '../../utils/config'


const Footer = (props) => {
    return (<footer css={css`
        max-width: 63rem;
        box-sizing: border-box;
        margin: auto;
        padding: 4rem;
        font-size: var(--font-size-small);

        display: flex;
        flex-flow: row nowrap;
        -webkit-box-pack: center;
        justify-content: center;

        position: relative;
        z-index: 2;

        @media (max-width: 870px) {
            flex-direction: column-reverse;
            padding: 1rem;
            & > div {
                margin: 20px 0;
            }
        }
    `}>
        <div css={css`
            flex: 0 0 auto;
        `}>
            <a href={`${config.main_site}`}>
                <img src={'/img/orchid-logo-world.svg'} alt={config.title} css={css`
                    display: block;
                    @media (max-width: 870px) {
                        max-width: 100px;
                    }
                `} />
            </a>
            © {new Date().getFullYear()} Orchid Labs Inc.

            <p css={css`
                & > a {
                    font-size: 80%;
                    color: var(--link-color);
                }
            `}>
                <a href={`${config.main_site}privacy-policy`}>Privacy Policy</a> | <a href={`${config.main_site}service-terms`}>Terms of Service</a>
            </p>
        </div>

        <div css={css`
            flex: 1 15rem;
            @media (max-width: 870px) {
                display: none;
            }
        `}></div>

        <div css={css`
            flex: 0 0 auto;
            display: flex;
            flex-wrap: wrap;
            li a {
                font-family: var(--font-sans-serif);
                font-size: var(--font-size-small);
                font-weight: var(--font-normal);
                text-transform: none;
            }
        `}>
            <FooterNavigation />
        </div>
        
        <div css={css`
            flex: 1 25rem;
            @media (max-width: 870px) {
                display: none;
            }
        `}></div>

        <div css={css`
            flex: 0 0 auto;
            li {
                display: inline-block;
                margin: .25rem;
            }
        `}>
            <b css={css`
                font-family: var(--font-family-heading);
            `}>{
                (()=>{
                    switch (process.env.GATSBY_TARGET_LANG) {
                        default:
                            return "Follow Us";
                        case "ja":
                            return "フォローする";
                        case "ko":
                            return "팔로우 하기";
                        case "zh":
                            return "关注我们";
                    }
                })()
            }</b>
            <FooterSocialIcons />
        </div>
        
        <div css={css`
            flex: 1 12rem;
            @media (max-width: 870px) {
                display: none;
            }
        `}></div>
    </footer>)
}

export default Footer


