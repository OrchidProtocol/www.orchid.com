import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

/**
 * Navigation component
 *
 * The Navigation component takes an array of your Ghost
 * navigation property that is fetched from the settings.
 * It differentiates between absolute (external) and relative link (internal).
 * You can pass it a custom class for your own styles, but it will always fallback
 * to a `site-nav-item` class.
 *
 */

const style = css`
    list-style: none;
    margin: 0;
    padding: 0;
    
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (min-width: 871px) {
        flex-direction: row;
        align-items: center;
    }

    img {
        display: inline;
        line-height: 24.5px
    }

    & > li {
        display: inline-block;
        padding: 0;
        margin: 0;
        text-transform: uppercase;
        line-height: 1.75;

        @media (max-width: 870px) {
            padding-top: 10px;
            display: block;
        }

        & > a {
            padding: 0.5rem;
            margin: -.5rem 0;
            color: var(--link-color);
            font-weight: var(--font-bold);
            font-size: 14px;
            position: relative;
            @media (max-width: 870px) {
                font-size: 14px;
                padding: 10px 0;
            }

            &:hover {
                text-decoration: none;
            }

            @media (min-width: 871px) {
                &[href="/"]:after {
                    content: " ";
                    position: absolute;
                    left: 0.5rem;
                    right: 0.5rem;
                    bottom: -3px;
                    height: 4px;
                    background: #5f45ba;
                    border-radius: 100vmax;
                }
            }
        }
    }

    .social-button.first {
        padding-left: 50px;
    }

    & > li:first-of-type {
        @media (min-width: 871px) {
            display: none;
        }
    }

    & > li.active-link > a::after {
        @media (min-width: 871px) {
            content: " ";
            position: absolute;
            left: 0.5rem;
            right: 0.5rem;
            bottom: -3px;
            height: 4px;
            background: #5f45ba;
            border-radius: 100vmax;
        }
    }
`;

const Navigation = ({ data, children }) => {
    const items = [];

    for (let i = 0; i < data.length; i++) {
        const navItem = data[i];
        const internalLink = navItem.url.match(/^\s?http(s?)/gi);

        //const className =
        //    internalLink ? "active-link" : "";
        items.push(
            <li key={i}>
                {internalLink ? (
                    <a css={css`display:block;`} href={navItem.url} rel="noopener noreferrer">
                        {navItem.label}
                    </a>
                ) : (
                        <Link css={css`display:block;`} to={navItem.url}>{navItem.label}</Link>
                    )}
            </li>
        );
    }

    return <ul css={style}>
        {items}
        {children}
    </ul>
};


export default Navigation;
