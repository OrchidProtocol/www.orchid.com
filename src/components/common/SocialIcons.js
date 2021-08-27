import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const SocialIcon = styled.li`
    list-style: none;
    padding: 0;
    margin: 0;
    a {
        display: block;
    }
    @media (min-width: 871px) {
        min-height: 57px;
    }
`;

const SocialIcons = (props) => {
    return (<>
        <SocialIcon className="social-button first">
            <a rel="noopener noreferrer" href="https://www.reddit.com/r/orchid/" target="_blank">
                <img width="30" height="30" src='/img/icons/reddit.svg' alt='Reddit' />
            </a>
        </SocialIcon>
        <SocialIcon className="social-button">
            <a rel="noopener noreferrer" href="https://twitter.com/OrchidProtocol" target="_blank">
                <img width="30" height="30" src='/img/icons/social-twitter.svg' alt='Twitter' />
            </a>
        </SocialIcon>
        <SocialIcon className="social-button">
            <a rel="noopener noreferrer" href="https://www.t.me/OrchidOfficial" target="_blank">
                <img css={css`@media (min-width: 871px) {margin-top:-1px;}`} width="32" height="32" src='/img/icons/social-telegram.svg' alt='Telegram' />
            </a>
        </SocialIcon>
        <SocialIcon className="social-button">
            <a rel="noopener noreferrer" href="https://github.com/OrchidTechnologies" target="_blank">
                <img width="30" height="30" src='/img/icons/social-github.svg' alt='Github' />
            </a>
        </SocialIcon>
    </>)
}

export default SocialIcons
