import React from 'react'
import { Link } from 'gatsby'

import _ from 'lodash'

import styled from '@emotion/styled'
import { css } from '@emotion/core'

const Tag = styled.span`
    
`;

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
const Navigation = ({ tags, linkTags }) => {
    const items = [];
    if (tags) {
        for(let i = 0; i < Math.min(3, tags.length); i++) {
            if (tags[i] !== 'homepage') {
                if (linkTags)
                    items.push(
                        <li key={i}>
                            <Link to={`/tag/${_.kebabCase(tags[i])}/`} css={css`
                                    &:hover {
                                        text-decoration: none;
                                    }
                                `}>
                                <Tag>{tags[i]}</Tag>
                            </Link>
                        </li>
                    )
                else 
                    items.push(<Tag key={i}>{/*(i !== 0) ? ', ' : ''*/}{tags[i]}</Tag>)
            }
        }
    }
    return (<ul css={css`
        list-style: none;
        margin: 0;
        padding: 0;
        font-weight: var(--font-bold);
        color: var(--color-primary);

        font-style: italic;

        a {
            color: var(--color-primary);
        }

        & > li {
            display: inline-block;
            margin: 0;
            padding: 0;

            &:before {
                display: inline-block;
                content: '/';
                margin: 0 5px;
            }

            &:nth-of-type(1):before {
                display: none;
            }
        }
    `}>
        {items}
    </ul>);
}

export default Navigation
