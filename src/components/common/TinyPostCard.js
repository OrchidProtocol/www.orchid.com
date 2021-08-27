import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import Tags from './Tags'

import { getCustomFormatedDate } from '../../utils/date';

const FeaturedIndicator = <div css={css`
    background: var(--color-primary);
    padding: 5px;
    display: inline-block;
    width: auto;
    margin-right: 5px;
    border-radius: 2px;
    color: #ffffff;
    line-height: 1;
    font-size: 75%;
`}>
    {
        (() => {
            switch (process.env.GATSBY_TARGET_LANG) {
                default:
                    return "Featured";
                case "ja":
                    return "おすすめ";
                case "ko":
                    return "주요 게시물";
                case "zh":
                    return "精选";
            }
        })()
    }
</div>

//<Link to={url}>

const TinyPostCard = ({ post }) => {
    const url = `/${post.frontmatter.url}/`

    let title = post.frontmatter.title,
        description = post.frontmatter.description;

    if (process.env.GATSBY_TARGET_LANG) {
        if (post.frontmatter[`title_${process.env.GATSBY_TARGET_LANG}`]) {
            title = post.frontmatter[`title_${process.env.GATSBY_TARGET_LANG}`];
        }
        if (post.frontmatter[`description_${process.env.GATSBY_TARGET_LANG}`]) {
            description = post.frontmatter[`description_${process.env.GATSBY_TARGET_LANG}`];
        }
    }

    let featuredimage = post.frontmatter.featuredimage;
    if (featuredimage) {
        if (process.env.GATSBY_TARGET_LANG && post.frontmatter[`featuredimage_${process.env.GATSBY_TARGET_LANG}`]) {
            featuredimage = post.frontmatter[`featuredimage_${process.env.GATSBY_TARGET_LANG}`];
        }
    }

    return (
        <div to={url} css={css`
            padding: var(--margin-quarter);
            margin: var(--margin-half);
            max-width: 17.5rem;
            width: 100%;
            background: #ffffff;
            box-shadow: 0 0 var(--margin-quarter) rgba(0,0,0,.1);
            display: flex;
            flex-direction: column;
        `}>
            <header css={css`
                display: block;
            `}>
                {featuredimage &&
                    <Link to={url}><div css={css`
                        padding: 26.2916% 50%;
                        background: var(--color-primary) no-repeat center center;
                        border-radius: 20px;
                        background-image: url(${featuredimage.publicURL});
                        background-size: cover;
                    `}></div></Link>}
            </header>
            <div className="everything-but-image" css={css`
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            `}>
                <div css={css`
                        display: flex;
                        align-items: center;
                        margin-top: var(--margin-quarter);
                    `}>
                    <Link to={url}>
                        {post.frontmatter.featuredpost && FeaturedIndicator}
                        <h4 css={css`
                            font-size: 16px;
                            margin-bottom: var(--margin-quarter);
                        `}>{title}</h4>
                    </Link>
                </div>

                <div css={css`
                    font-size: 0.65rem;
                `}>
                    {getCustomFormatedDate(post.frontmatter.date)}
                </div>
            </div>
        </div>
    )
}


export default TinyPostCard
