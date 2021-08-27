import React, { useState } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import NavbarNavigation from './NavbarNavigation.js'
import config from '../../utils/config'
import { Location } from '@reach/router'

const Container = styled.div`
    background-color: var(--color-bg);
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: var(--max-container-width);
    margin: 0 auto;
    --link-color: #53696a;
    @media (max-width: 870px) {
        padding: 1rem;
        body.no-js & {
            flex-wrap: wrap;
        }
    }
`;

const InfoBar = styled.a`
    background: var(--color-primary);
    color: #FFFFFF !important;
    text-decoration: none;
    display: block;
    text-align: center;
    padding: 0.3rem;
    font-size: 0.75rem;
    &:hover {
        text-decoration: none;
    }
`;

function Navbar({ customText }) {
    const [active, setActive] = useState(false);

    return <Container data-active={active}>
        {/*<InfoBar href={`${config.main_site}newsletter-signup`}>
            Get privacy news delivered to your inbox &raquo;
        </InfoBar>*/}
        {/* The main header section on top of the screen */}
        <Header customText={customText}>
            <a href="https://www.orchid.com/" css={css`
                @media (max-width: 871px) {
                    display: none;
                }
            `}>
                <img css={css`
                    max-width: 100%;
                    margin: -1rem;
                    padding: 1rem;
                    box-sizing: content-box;
                    display: block;
                `} width="93" height="24" src="/img/orchid-logo-text.svg" alt={config.title} />
            </a>

            <a href="https://www.orchid.com/" css={css`
                @media (min-width: 870px) {
                    display: none;
                }
            `}>
                <img css={css`
                        max-width: 100%;
                        margin: -1rem;
                        padding: 1rem;
                        box-sizing: content-box;
                        width: 35px;
                        height: auto;
                    `} width="35" height="30" src="/img/orchid-logo-small.svg" alt={config.title} />
            </a>

            <div role="button" css={css`
                padding: 1rem;
                margin: -1rem;
                cursor: pointer;

                @media (min-width: 871px) {
                    display: none;
                }
                body.no-js & {
                    display: none;
                }
            `} onClick={() => {
                    setActive(!active);
                }}>
                <img src={'/img/icons/hamburger.svg'} alt='Open Menu' />
            </div>

            <div css={css`
                text-align: right;
                @media screen and (max-width: 870px) {
                    position: fixed;
                    body.no-js & {
                        position: static;
                    }
                    z-index: 9999;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    width: 100%;
                    height: 100%;
                    ${active ? `background: rgba(0,0,0,0.5);` : `background: rgba(0,0,0,0);`}
                    transition-duration: .4s;
                    transition-timing-function: cubic-bezier(.25,.5,.5,1);

                    pointer-events: none;

                    & > div {
                        display: flex;
                        flex-direction: column;
                        position: fixed;
                        overflow-y: auto;
                        ${active ? `transform: translateX(0%);` : `transform: translateX(100%);`}

                        body.no-js & {
                            position: static;
                            transform: none;
                        }

                        background-color: var(--color-bg);
                        box-shadow: -4px 0 8px rgba(0,0,0,.1), 0 0 4px rgba(0,0,0,.05);

                        transition-duration: .4s;
                        transition-timing-function: cubic-bezier(.25,.5,.5,1);
                        top: 0;
                        right: 0;
                        bottom: 0;
                        padding: 1rem;
                        width: 10rem;
                        box-sizing: content-box;
                        body.no-js & {
                            width: 100%;
                            box-sizing: border-box;
                            box-shadow: none;
                        }
                        color: var(--color-base);
                    }
                }
            `}>
                <div css={css`
                    pointer-events: auto;
                    display: flex;
                    li a {
                        font-size: var(--font-size-small);
                    }
                    @media (max-width: 870px) {
                        li {
                            padding-top: 10px;
                            line-height: 1.75;
                        }
                        .social-button {
                            display: none;
                        }
                    }
                `}>
                    <div role="button" css={css`
                        padding: 0 0 1rem 0;
                        width: 100%;
                        flex-flow: row-reverse nowrap;

                        @media (min-width: 871px) {
                            display: none;
                        }
                        body.no-js & {
                            display: none;
                        }
                    `} onClick={() => {
                            setActive(!active);
                        }}>
                        <img src={'/img/icons/close.svg'} alt='Close Menu' />
                    </div>
                    <NavbarNavigation data={config.navbar_navigation}>
                        <li css={css`
                            cursor: pointer;
                            position: relative;

                            color: var(--link-color);
                            font-weight: var(--font-bold);
                            font-size: 14px;
                            

                            @media (min-width: 871px) {
                                padding-left: 1rem !important;
                                padding-right: 1rem !important;
                            }
                            
                            li {
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
                        `}>
                            <input type="checkbox" id="navbar-language-selector-checkbox" css={css`
                                display: none;
                                
                                &:checked~.navbar-language-selector-list {
                                    @media ( min-width:871px ) {
                                        display: block;
                                        animation-name: navbar-language-selector-animation;
                                        animation-timing-function: ease-out;
                                        animation-duration: 0.3s;
                                    }
                                }
                            `} />
                            <label htmlFor="navbar-language-selector-checkbox" css={css`
                                position: absolute;
                                display: block;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                cursor: pointer;
                            `}></label>

                            <span className="phantom-a">
                                <img alt="" css={css`
                                    vertical-align: top;
                                `} width="20" height="20" src="/img/globe.svg" />
                                <span>
                                    {
                                        (() => {
                                            switch (process.env.GATSBY_TARGET_LANG) {
                                                case "ko":
                                                    return "한국어";
                                                default:
                                                    return "English";
                                                case "ru":
                                                    return "русский";
                                                case "ja":
                                                    return "日本";
                                                case "zh":
                                                    return "中文";
                                                case "id":
                                                    return "Indonesian";
                                            }
                                        })()
                                    }
                                </span>
                            </span>
                            <ul className="navbar-language-selector-list" css={css`
                                padding: 0;

                                @media ( min-width:871px ) {
                                    display: none;
                                    position: absolute;
                                    top: 100%;
                                    top: calc(100% + 0.5rem);
                                    left: 0%;
                                    z-index: 100;
                                    padding: 0.5rem;
                                    background: #fff;
                                }

                                width: auto;
                                min-width: 100%;
                                list-style: none;
                                margin: 0;

                                &>li:nth-of-type(1)#navbar-language-selector-list-item-first {
                                    @media ( min-width:871px ) {
                                        padding-top: 0;
                                    }
                                }
                            `}>

                                <Location>
                                    {({ location }) => {
                                        return <>
                                            <li id="navbar-language-selector-list-item-first"><a className="phantom-a" href={`//blog.ko.orchid.com${location.pathname}`}>한국어</a></li>
                                            <li><a className="phantom-a" href={`//blog.orchid.com${location.pathname}`}>English</a></li>
                                            <li><a className="phantom-a" href={`//blog.ja.orchid.com${location.pathname}`}>日本</a></li>
                                            <li><a className="phantom-a" href={`//blog.zh.orchid.com${location.pathname}`}>中文</a></li>
                                            <li><a className="phantom-a" href={`//blog.id.orchid.com${location.pathname}`}>Indonesian</a></li>
                                            <li><a className="phantom-a" href={`//blog.ru.orchid.com${location.pathname}`}>русский</a></li>
                                        </>
                                    }}
                                </Location>
                            </ul>
                        </li>
                    </NavbarNavigation>
                </div>
            </div>

            <a href={
                '//www.' + (() => {
                    switch (process.env.GATSBY_TARGET_LANG) {
                        default:
                            return "";
                        case "ko":
                            return "ko.";
                        case "ru":
                            return "ru.";
                        case "ja":
                            return "ja.";
                        case "zh":
                            return "zh.";
                        case "id":
                            return "id.";
                    }
                })() + "orchid.com/download"
            } css={css`
                display: none;

                @media screen and (min-width: 1201px) {
                    display: block;

                    &>button {
                        font-size: 14px;
                        padding-left: 1rem;
                        padding-right: 1rem;
                    }
                }
            `}>
                <button css={css`
                    font-size: 14px;
                    padding-left: 1rem;
                    padding-right: 1rem;
                    background: #5f45ba;
                    color: #f4f6f1;
                    transition-property: background,color,border,box-shadow;
                    transition-duration: .2s;
                    transition-timing-function: ease-out;
                    padding: .35em 1em;
                    box-sizing: border-box;
                    border-radius: 100vmax;
                    box-shadow: 0 3px 6px rgba(0,0,0,.2), 0 0 3px rgba(0,0,0,.1);
                    border: 0;
                    cursor: pointer;
                    font: inherit;
                    line-height: inherit;
                `}>
                    Download
                </button>
            </a>
        </Header>
    </Container>
}

export default Navbar;
