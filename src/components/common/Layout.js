import React from 'react'
import { Helmet } from 'react-helmet'
import { css } from '@emotion/core'
import { Location } from '@reach/router'

import Navbar from './Navbar.js'
import Footer from './Footer.js'
import Splash from './Splash.js'
import '../all.css'

const TemplateWrapper = ({ children, bodyClass, customText }) => {

    return (
        <>
            <Helmet>
                <html lang={process.env.GATSBY_TARGET_LANG} />
                <body css={bodyClass} />
                <link rel="icon" type="image/ico" href="/img/favicon.ico" />
                <link rel="icon" type="image/png" href="/img/favicon.png" />
                <link rel="manifest" href="/manifest.webmanifest" />
                <meta name="theme-color" content="#5f45ba" />
            </Helmet>

            <Location>
                {({ location }) => {
                    return <Helmet>
                        <link rel="alternate" href={`https://blog.ko.orchid.com${location.pathname}`} hreflang="ko" />
                        <link rel="alternate" href={`https://blog.orchid.com${location.pathname}`} hreflang="x-default" />
                        <link rel="alternate" href={`https://blog.ja.orchid.com${location.pathname}`} hreflang="ja" />
                        <link rel="alternate" href={`https://blog.zh.orchid.com${location.pathname}`} hreflang="zh" />
                        <link rel="alternate" href={`https://blog.id.orchid.com${location.pathname}`} hreflang="id" />
                        <link rel="alternate" href={`https://blog.ru.orchid.com${location.pathname}`} hreflang="ru" />

                        {
                            process.env.GATSBY_TARGET_LANG === "en" || !process.env.GATSBY_TARGET_LANG ?
                                <meta rel="canonical" href={`https://blog.orchid.com${location.pathname}`} /> :
                                <meta rel="canonical" href={`https://blog.${process.env.GATSBY_TARGET_LANG.toLowerCase()}.orchid.com${location.pathname}`} />
                        }
                    </Helmet>
                }}
            </Location>

            <div className="viewport">

                <script dangerouslySetInnerHTML={{
                    /*Removes the 'no-js' class*/
                    __html: `
                    document.addEventListener('DOMContentLoaded', ()=>{
                        document.body.classList.remove('no-js');
                    });
                    document.body.classList.remove('no-js');
                    `,
                }}></script>

                <Navbar />
                <Splash customText={customText} />

                <main css={css`
                font-size: 16px;
            `}>
                    {/* All the main content gets inserted here, index.js, post.js */}
                    {children}
                </main>

                <div css={css`
                background-color: var(--color-bg);
                width: 100%;
                position: relative;
                overflow: hidden;
            `}>
                    <div css={css`
                    max-width: 63rem;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 100%;
                    width: 100%;
                    margin: auto;
                    overflow: visible;
                    @media (min-width: 871px) {
                        left: calc(50% - 31.5rem);
                    }
                `}>
                        <img alt="" css={css`
                        bottom: 0;
                        left: -4rem;
                        height: 14.25rem;
                        width: auto;
                        position: absolute;
                        @media (max-width: 870px) {
                            display: none;
                        }
                    `} src="/img/coral-electric.svg" />
                        <img alt="" css={css`
                        bottom: 0;
                        left: 2rem;
                        position: absolute;
                        @media (max-width: 870px) {
                            display: none;
                        }
                    `} src="/img/coral-real.svg" />
                        <img alt="" css={css`
                        right: 5rem;
                        bottom: 0;
                        max-width: 4rem;
                        position: absolute;
                        @media (min-width: 871px) {
                            display: none;
                        }
                    `} src="/img/coral-real-mobile.svg" />
                        <img alt="" css={css`
                        position: absolute;
                        right: 0;
                        top: 3rem;
                    `} src="/img/footer-fish.svg" />
                    </div>
                    {/* The footer at the very bottom of the screen */}
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default TemplateWrapper
