import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const SocialIcon = styled.li`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const FooterSocialIcons = (props) => {
    return (<ul css={css`
        padding: 0;
        margin: 0;
        list-style: none;
    `}>
        <SocialIcon>
            <a rel="noopener noreferrer" href="https://twitter.com/OrchidProtocol" target="_blank">
                <img width="30" height="30" src='/img/icons/social-twitter.svg' alt='Twitter' />
            </a>
        </SocialIcon>
        <SocialIcon>
            <a rel="noopener noreferrer" href="https://www.reddit.com/r/orchid/" target="_blank">
                <img width="30" height="30" src='/img/icons/reddit.svg' alt='Reddit' />
            </a>
        </SocialIcon>
        <SocialIcon>
            <a rel="noopener noreferrer" href="https://discord.gg/GDbxmjxX9F" target="_blank">
                <img width="30" height="30" src='/img/icons/social-discord.svg' alt='Discord' />
            </a>
        </SocialIcon>
        <SocialIcon>
            <a rel="noopener noreferrer" href="https://www.t.me/OrchidOfficial" target="_blank">
                <img width="30" height="30" src='/img/icons/social-telegram.svg' alt='Telegram' />
            </a>
        </SocialIcon>
        <SocialIcon>
            <a rel="noopener noreferrer" href="https://github.com/OrchidTechnologies" target="_blank">
                <img width="30" height="30" src='/img/icons/social-github.svg' alt='Github' />
            </a>
        </SocialIcon>
        <SocialIcon>
            <a rel="noopener noreferrer" href="https://www.facebook.com/OrchidProtocol" target="_blank">
                <img width="30" height="30" src='/img/icons/social-facebook.svg' alt='Facebook' />
            </a>
        </SocialIcon>
        <SocialIcon>
            <a rel="noopener noreferrer" href="https://www.youtube.com/channel/UCIH_BKBlNemsCzDhPYZBlHw" target="_blank">
                <img width="30" height="30" src='/img/icons/social-youtube.svg' alt='YouTube' />
            </a>
        </SocialIcon>
        <SocialIcon>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/company/orchidprotocol" target="_blank">
                <img width="30" height="30" src='/img/icons/social-linkedin.svg' alt='LinkedIn' />
            </a>
        </SocialIcon>
    </ul>)
}

export default FooterSocialIcons
