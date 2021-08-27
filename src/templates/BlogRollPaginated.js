import React from 'react'
import { Helmet } from 'react-helmet'
import config from '../utils/config';

import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link, graphql, StaticQuery } from 'gatsby'

import _ from 'lodash';
import { Layout, PostCard, Pagination } from '../components/common';
import { getCustomFormatedDate, currentTimestampUTC } from '../utils/date';
const { buildTimestampUTC } = require('../utils/currentTimestamp');

const Sidebar = styled.div`
`;

const SidebarCard = styled.div`
    background: #fff;
    border: 1px solid #d5d7e2;
    padding: 1rem;
    margin: 1rem;
    font-size: .82rem;
    position: relative;
    &:nth-of-type(1) {
        margin-top: 0;
    }
`;
const SidebarCardHeader = styled.div`
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-base);
`;
const SidebarCardSeperator = styled.div`
    border-top: 2px solid #c8c6c8;
    margin: .5rem 0;
    margin: calc(.5rem - 1px) 0;
    box-sizing: border-box;
    width: 100%;
`;

const SidebarTagLi = styled.li`
    list-style: none;
    margin: 3px 0;
`;
const SidebarTagUl = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const BlogRoll = ({ data, pageContext }) => {
    const posts = data.allPosts.edges
    const featured = data.featuredPosts.edges

    const { tags } = pageContext


    for (let index = posts.length - 1; index >= 0; index--) {
        const element = posts[index];
        if (element.node.frontmatter.date > buildTimestampUTC) {
            posts.splice(index, 1)
        }
    }
    for (let index = featured.length - 1; index >= 0; index--) {
        const element = featured[index];
        if (element.node.frontmatter.date > buildTimestampUTC) {
            featured.splice(index, 1)
        }
    }

    const tagElements = [];
    tags.forEach(tag => {
        tagElements.push(<SidebarTagLi key={_.kebabCase(tag)}>
            <Link key={_.kebabCase(tag)} to={`/tag/${_.kebabCase(tag)}/`}>
                {tag}
            </Link>
        </SidebarTagLi>);
    })

    const featuredElements = [];
    for (let index = 0; index < featured.length; index++) {

        let title = featured[index].node.frontmatter.title;
        if (process.env.GATSBY_TARGET_LANG) {
            if (featured[index].node.frontmatter[`title_${process.env.GATSBY_TARGET_LANG}`]) {
                title = featured[index].node.frontmatter[`title_${process.env.GATSBY_TARGET_LANG}`];
            }
        }

        let featuredimage = featured[index].node.frontmatter.featuredimage;
        if (featured[index].node.frontmatter.featuredimage) {
            let ftImage = featured[index].node.frontmatter.featuredimage;
            if (process.env.GATSBY_TARGET_LANG) {
                if (featured[index].node.frontmatter[`featuredimage_${process.env.GATSBY_TARGET_LANG}`]) {
                    ftImage = featured[index].node.frontmatter[`featuredimage_${process.env.GATSBY_TARGET_LANG}`];
                }
            }
            featuredimage = ftImage.publicURL;
        }

        featuredElements.push(<Link css={css`
            display: block;
            margin-top: 2rem;

            &:nth-of-type(1) {
                margin-top: 1rem;
            }
            &:hover {
                text-decoration: none;
            }
        `}
            key={index} to={`/${featured[index].node.frontmatter.url}/`}>
            {featuredimage ?
                <div css={css`
                    border-radius: 12px;
                    background-image: url(${featuredimage});
                    background-size: cover;
                    background-position: center;
                    padding: 26.2916% 50%;
                `}></div> : <></>}
            <h3 css={css`
                ${process.env.GATSBY_TARGET_LANG !== 'en' ? `
                    margin-top: 0.25rem;
                ` : ''}
            `}>{title}</h3>
            <span>{getCustomFormatedDate(featured[index].node.frontmatter.date)}</span>
        </Link>);
    }

    let currentPost = 0;

    return (
        <>
            <Helmet>
                <title>{config.title}</title>
                <meta name="description" content="Your VPN should be secure, which is why Orchid is building with open source tools for custom VPN configurations and privacy services." />

                <meta property="og:image" content={config.feature_image} />
                <meta property="og:image:width" content="1688" />
                <meta property="og:image:height" content="950" />
                <meta name="twitter:image" content={config.feature_image} />
                <meta name="twitter:card" content="summary_large_image" />


                <script type="application/ld+json">{`
					{
						"@context": "https://schema.org/",
						"@type": "Blog",
						"name": "${config.title}",
						"url": "${config.siteUrl}",
						"image": {
								"@type": "ImageObject",
								"url": "${config.siteUrl}${config.feature_image}",
								"width": "${config.feature_image_width}",
								"height": "${config.feature_image_height}"
							},
						"publisher": {
							"@type": "Organization",
							"name": "${config.title}",
							"logo": {
								"@type": "ImageObject",
								"url": "${config.siteUrl}${config.logo}",
								"width": ${config.logoWidth},
								"height": ${config.logoHeight}
							}
						},
						"mainEntityOfPage": {
							"@type": "WebPage",
							"@id": "${config.siteUrl}"
						},
						"description": "${config.description}"
					}
				`}</script>

                <script>
                    {`
						if ('serviceWorker' in window.navigator) {
							window.navigator.serviceWorker.getRegistrations().then((registrations) => {
								for(let registration of registrations) {
									registration.unregister();
								}
							}).catch((err) => {
								console.log('Service Worker registration failed: ', err);
							});
						}
					`}
                </script>

            </Helmet>
            <Layout isHome={true}>
                <div className="container" css={css`
                    position: relative;
                    z-index: 1;
                `}>
                    <div css={css`
                        display: grid;
                        grid-template-columns: 6fr 3fr;
                        grid-gap: 2rem;
                        @media (max-width: 1200px) {
                            display: block;
                        }
                    `}>
                        <section css={css`
                            
                        `}>
                            {posts.map(({ node }) => (
                                // The tag below includes the markup for each post - components/common/PostCard.js
                                <PostCard number={currentPost++} key={node.id} post={node} />
                            ))}

                            <Pagination pageContext={pageContext} />

                        </section>
                        <Sidebar>
                            <SidebarCard>
                                <svg css={css`
                                    position: absolute;
                                    top: 0;
                                    right: 0;
                                    margin-top: -1.5rem;
                                    margin-right: -1.5rem;
                                    width: 5.5rem;
                                    height: auto;
                                `} width="147" height="145" viewBox="0 0 147 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M60.3207 53.063C60.6176 53.8365 60.2317 54.7039 59.4586 55.0007C58.6848 55.2977 57.8169 54.9116 57.52 54.1381C57.2231 53.3646 57.6097 52.497 58.3835 52.1999C59.1566 51.9032 60.0238 52.2895 60.3207 53.063Z" fill="#F4F6F1" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M75.1177 42.5625C75.3316 43.1977 75.5234 43.8398 75.6888 44.4855C75.6888 44.4855 75.5323 43.7318 75.1177 42.5625Z" fill="#D7D3E2" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M75.0714 45.3631L74.9432 45.2023L75.0714 45.3631Z" fill="#D7D3E2" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M95.1304 92.6537L78.3678 72.2586L73.7587 66.6515L73.7574 66.6499C65.2684 79.018 55.2521 78.7183 55.1715 78.7162C62.3615 86.8914 70.3412 93.0326 78.3126 97.6502C85.1001 101.58 91.8794 104.406 98.1603 106.434C98.1679 106.434 105.418 106.112 95.1304 92.6537Z" fill="#D7D3E2" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M90.4316 64.5341L122.929 104.546L90.4316 64.5341Z" fill="#D7D3E2" />
                                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="70" y="1" width="56" height="65">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M70.334 14.7404L106.11 1.0071L125.616 51.8211L89.8396 65.5543L70.334 14.7404Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M106.102 1.01027L89.7789 30.0164C89.9165 30.2006 90.0629 30.3843 90.1957 30.5689C98.4779 42.0548 91.8061 54.7973 87.9028 60.5086L88.8243 61.6649L91.4336 64.9401C92.364 64.6033 94.5575 63.6736 97.169 61.6654C100.788 58.8818 105.209 54.0247 108.187 45.7677C108.187 45.7677 111.973 35.4769 109.693 19.4566C107.413 3.43492 106.102 1.01027 106.102 1.01027Z" fill="#5F45BA" />
                                    </g>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M88.8509 60.8559L87.8512 60.1685L88.8509 60.8559Z" fill="#5F45BA" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M91.7225 65.1094L89.3555 61.7334L91.7225 65.1094Z" fill="#5F45BA" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M90.3903 30.9457C90.2592 30.7422 90.1416 30.5371 90.0002 30.3348L90.0675 30.2172C89.9239 30.0255 89.7885 29.8329 89.6314 29.6429L76.8117 14.0622L75.5368 45.2691L79.6985 50.4441L90.3903 30.9457Z" fill="#7261C9" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M79.6717 50.4551L75.6543 45.5704L79.6717 50.4551Z" fill="#8F4BD1" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M86.0543 58.7158L79.6699 50.4551L82.8854 54.6157L86.0543 58.7158Z" fill="#773BBC" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M90.4067 30.2667L90.3085 30.4433L79.4696 49.932L86.3706 58.4516L87.7825 60.1949C91.8188 54.4526 98.7446 41.6605 90.4067 30.2667Z" fill="#5E5AAF" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M86.0547 58.7158L87.705 60.2246L86.0547 58.7158Z" fill="#773BBC" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M122.735 105.105L90.898 65.0918L88.303 61.8307L87.3866 60.6794L85.9937 58.9283L82.6142 54.681L78.205 60.0073L77.8721 60.4102L74.394 64.6125L78.8616 69.6709L114.734 110.28C114.734 110.279 114.735 110.28 114.736 110.279C115.167 110.343 115.59 110.403 116.005 110.458C117.724 110.673 119.903 110.85 121.923 110.984C124.99 111.189 127.662 111.298 127.662 111.298L122.735 105.105Z" fill="#5F45BA" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M63.0239 45.7585C61.0878 46.5496 58.863 45.5834 58.0552 43.6008C57.2463 41.6171 58.1605 39.3678 60.0966 38.5767C62.0327 37.7857 64.2575 38.7519 65.0656 40.7351C65.8742 42.7181 64.96 44.9674 63.0239 45.7585ZM50.1273 30.7731C41.7792 33.427 39.3366 39.5697 38.79 44.4107L38.9635 44.3843L41.8213 43.9449C42.8636 43.785 43.858 44.489 44.0798 45.5432L44.6126 48.0743C44.723 48.6002 44.6135 49.1084 44.3646 49.5243L50.1025 47.8294C50.8061 51.5632 56.5135 54.0345 56.5135 54.0345C61.1515 55.8178 64.8129 55.3454 67.6265 53.9506C69.9392 52.7488 72.9554 50.2552 75.3431 45.0799C75.1831 44.5252 75.0056 43.9715 74.8139 43.422C71.6441 34.3349 64.0565 26.3437 50.1273 30.7731Z" fill="#5F45BA" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M60.0721 38.6988C58.0266 39.5333 57.0452 41.8683 57.8804 43.9134C58.7149 45.9588 61.0499 46.9401 63.0955 46.1055C65.141 45.2709 66.1224 42.9359 65.287 40.8901C64.4527 38.8454 62.1177 37.8642 60.0721 38.6988Z" fill="#271C47" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M63.7225 55.1753L63.5571 54.9726C63.5571 54.9726 65.0917 54.9063 67.2119 53.8179C64.3198 55.2372 60.5774 55.7574 55.8711 54.0642C55.8711 54.0642 50.0836 51.7071 49.4202 48.0304L43.54 49.7883C43.5123 49.8335 43.4892 49.8818 43.4575 49.9244C43.1246 50.373 42.607 50.69 41.9969 50.7458L39.7691 50.9509L38.1141 51.4112C38.1141 51.4112 37.9375 61.8403 53.8469 78.6917C53.8469 78.6917 53.8504 78.6917 53.8507 78.6923C53.9331 78.6938 64.1468 78.8546 72.9745 66.4954L63.7225 55.1753Z" fill="#C2BBEA" />
                                    <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="36" width="43" height="28">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.53711 50.2405L40.3737 36.1003L45.3985 49.1905L8.56195 63.3307L3.53711 50.2405Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask1)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M41.5812 43.6992L38.6691 44.1638L38.4919 44.1927L5.82344 49.4105C4.5422 49.6152 3.78288 50.9546 4.27051 52.1499C4.60177 52.9616 5.42619 53.4625 6.30468 53.3851L38.6492 50.5348C38.6853 50.7277 38.7109 50.8401 38.7109 50.8401L40.3585 50.3837L42.5802 50.1882C43.1884 50.135 43.7031 49.818 44.033 49.3672C44.0643 49.3244 44.0869 49.2752 44.1146 49.2304C44.3723 48.8129 44.4882 48.306 44.3812 47.784L43.8644 45.2684C43.6485 44.221 42.6434 43.5296 41.5812 43.6992Z" fill="#271C47" />
                                    </g>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M78.9208 69.2883L74.3971 64.2622C73.9358 64.9983 73.4683 65.6866 72.9967 66.3493L72.9472 66.424L77.6064 71.9565L94.5544 92.0823C104.944 105.372 97.4914 105.791 97.4837 105.791C97.655 105.843 97.8278 105.897 97.9984 105.947C102.474 107.254 115.243 109.638 115.243 109.638L78.9208 69.2883Z" fill="#C2BCD3" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M72.7685 65.9585C73.2723 65.4323 73.7757 64.887 74.2773 64.3082L72.7685 65.9585Z" fill="#C2BCD3" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M73.3748 66.3001L73.3768 66.3025L73.4512 66.1893L73.3748 66.3001Z" fill="#968BBC" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M75.6542 45.5703C72.9066 50.4853 69.6428 52.9489 67.1766 54.1803C72.9807 51.3996 75.6542 45.5703 75.6542 45.5703Z" fill="#968BBC" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M73.9941 57.9899L75.2861 58.5651L73.9941 57.9899Z" fill="#968BBC" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M74.5521 57.9798L74.5265 58.6527L74.8283 58.0966L74.5521 57.9798Z" fill="#968BBC" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M74.7782 58.3359L74.502 58.2191L74.7782 58.3359Z" fill="#968BBC" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M75.3874 58.9792L75.4074 58.5505L75.5852 58.6237L75.3874 58.9792ZM80.074 50.5783L76.0084 45.5677L75.9262 45.4659C75.9262 45.4659 73.5463 51.4979 68.0186 54.2081C65.9259 55.2821 64.4118 55.3491 64.4118 55.3491L64.5747 55.5485L73.6892 66.6764L73.7399 66.6052L75.1145 64.5655L78.6483 60.4148L78.9868 60.0176L83.4655 54.758L80.074 50.5783Z" fill="#968BBC" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M61.9788 40.6431C62.2759 41.4169 61.8892 42.2846 61.1161 42.5813C60.343 42.8781 59.4751 42.492 59.1781 41.7182C58.8812 40.9449 59.2679 40.0773 60.041 39.7806C60.8141 39.4838 61.682 39.8698 61.9788 40.6431Z" fill="white" />
                                </svg>

                                <span css={css`
                                    font-size: 1.025rem;
                                    color: var(--color-primary);
                                    font-weight: bold;
                                    display: block;
                                    max-width: 89%;
                                    font-size: 99%;
                                `}>Download the app and join Orchid’s privacy network today!</span>
                                <a href="https://www.orchid.com/join">
                                    <button css={css`
                                        background-color: var(--color-primary);
                                        color: white;
                                        padding: .35em 1em;
                                        width: 100%;
                                        display: block;
                                        margin-top: 24px;
                                        border-radius: 100vmax;
                                    `}>
                                        Join Now
                                    </button>
                                </a>
                            </SidebarCard>
                            <SidebarCard>
                                <SidebarCardHeader>
                                    {
                                        (() => {
                                            switch (process.env.GATSBY_TARGET_LANG) {
                                                default:
                                                    return "Featured Posts";
                                                case "ja":
                                                    return "おすすめの記事";
                                                case "ko":
                                                    return "주요 게시물";
                                                case "zh":
                                                    return "精选文章";
                                            }
                                        })()
                                    }
                                </SidebarCardHeader>
                                <SidebarCardSeperator />
                                {featuredElements}
                            </SidebarCard>
                            <SidebarCard>
                                <SidebarCardHeader>
                                    Topics
                                </SidebarCardHeader>
                                <SidebarCardSeperator />
                                <SidebarTagUl>{tagElements}</SidebarTagUl>
                            </SidebarCard>
                        </Sidebar>

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default BlogRoll

export const BlogRollQuery = graphql`
    query BlogRollPaginatedQuery($buildTimestampUTC: Float, $skip: Int!, $limit: Int!) {
        allPosts: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { 
                frontmatter: { 
                    templateKey: {
                        eq: "blog-post"
                    },
                    date: { lt: $buildTimestampUTC },
                    public: {
                        eq: true
                    }
                }
            }
            skip: $skip
            limit: $limit
            ) {
            edges {
                node {
                    excerpt(pruneLength: 300)
                    html
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        url
                        title
                        title_ja
                        title_ko
                        title_zh
                        title_id
                        title_ru
                        description
                        description_ja
                        description_ko
                        description_zh
                        description_id
                        description_ru
                        tags
                        templateKey
                        date
                        featuredpost
                        featuredimage {
                            publicURL
                        }
                        featuredimage_ja {
                            publicURL
                        }
                        featuredimage_ko {
                            publicURL
                        }
                        featuredimage_zh {
                            publicURL
                        }
                        featuredimage_id {
                            publicURL
                        }
                        featuredimage_ru {
                            publicURL
                        }
                    }
                }
            }
        }
        

        featuredPosts: allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                filter: { 
                    frontmatter: { 
                        featuredpost: { eq: true },
                        templateKey: { eq: "blog-post" },
                        date: { lt: $buildTimestampUTC },
                        public: { eq: true } 
                    }
                }
            ) {
            edges {
                node {
                    excerpt(pruneLength: 300)
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        url
                        title
                        title_ja
                        title_ko
                        title_zh
                        title_id
                        title_ru
                        templateKey
                        date
                        featuredpost
                        featuredimage {
                            publicURL
                        }
                    }
                }
            }
        }
    }
`