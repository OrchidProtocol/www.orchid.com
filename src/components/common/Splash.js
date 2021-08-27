import React from 'react'
import { Link } from 'gatsby'

import { css } from '@emotion/core'

const Splash = (props) => {

    const {customText} = props;

    return (<div className="splash-circuit" css={css`
        display: flex;
        flex-direction: column-reverse;
        @media (max-width: 870px) {
            overflow: hidden;
        }
        @media (min-width: 871px) {
            flex-direction: column;
        }
    `}>
        <div className="splash-circuit-image" css={css`
            max-width: 63rem;
            box-sizing: border-box;
            
            width: 100%;
            position: relative;
            z-index: -10;
            margin: auto;

            &:before {
                pointer-events: none;
                content: "";
                display: block;
                position: absolute;
                top: -2.7rem;
                left: 0;
                max-width: 100%;
                width: 100%;
                height: 100px;
                background-image: url(/img/circuit.svg);
                background-repeat: no-repeat;
                background-position: top left;
                background-size: auto 100%;
                transform: translateZ(-1px);
                
                @media (min-width: 871px) {
                    width: 900px;
                    height: 333px;
                    top: 0;
                    left: -50px;
                    background-size: contain;
                }
            }
        `}></div>
        <div className="splash-circuit-grid" css={css`
            max-width: 63rem;
            margin: auto;
            box-sizing: border-box;

            width: 100%;
            display: flex;
            justify-content: space-between;
            grid-gap: 2rem;
            position: relative;
            z-index: 1;
        `}>
            <div className="splash-circuit-grid-item" css={css`
                padding-left: 2rem;
                padding-right: 2rem;
                padding-top: 1rem;
                padding-bottom: 0rem;
                
                @media (min-width: 871px) {
                    padding-top: 5rem;
                    padding-bottom: 1.5rem;
                    width: 60%;
                    max-width: 700px;
                }
            `}>
                <h1 css={css`
                    margin-bottom: 0;
                `}>
                    <Link to="/" css={css`
                        color: var(--color-primary);
                        &:visited {
                            color: var(--color-primary);
                        }
                        font-size: 32px;
                        @media (min-width: 871px) {
                            font-size: 48px;
                        }
                        &:hover {
                            color: var(--color-primary);
                            text-decoration: none;
                        }
                    `}>
                        {
                            (()=>{
                                let append = "";
                                if (customText) {
                                    append = ` - ${customText}`;
                                }
                                switch (process.env.GATSBY_TARGET_LANG) {
                                    default:
                                        return "Blog"+append;
                                    case "ja":
                                        return "ブログ"+append;
                                    case "ko":
                                        return "블로그"+append;
                                    case "zh":
                                        return "我们的博客"+append;
                                    case "ru": 
                                        return "Блог"+append;
                                }
                            })()
                        }
                    </Link>
                </h1>
                { (props.subtitle || props.description) && <div className="splash-circuit-grid-text" css={css`
                    @media (min-width: 871px) {
                        margin-top: 4rem;
                    }
                `}>
                    { props.subtitle && <h3 css={css`
                        color: #53696a;
                        margin-bottom: 2rem;
                        font-size: 1.5rem;
                    `}>{props.subtitle}</h3> }
                    { props.description && <p>{props.description}</p> }
                </div> }
            </div>
            {props.image && 
                <div className="splash-circuit-grid-item" css={css`
                    justify-content: space-around;
                    -webkit-box-align: center;
                    align-items: center;
                    @media (min-width: 871px) {
                        width: 40%;
                        margin-left: 2rem;
                        padding-top: 4rem;
                    }
                `}>
                    <img className="splash-circuit-feature" alt="" src={props.image}/>
                </div>}
        </div>
    </div>);
}



export default Splash
