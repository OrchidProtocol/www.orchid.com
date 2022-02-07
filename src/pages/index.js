import { Helmet } from 'react-helmet'
import React from 'react'
import Layout from '../components/common/Layout'
import './index.scss'
import YouTubeEmbed from '../components/YouTubeEmbed';
import NewsletterSignupCore from '../components/newsletter-signup-core';

import BlogPosts from '../components/common/BlogPosts';
import { graphql } from 'gatsby';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import WebsiteMeta from '../components/common/meta/WebsiteMeta';
import { StaticImage } from "gatsby-plugin-image";
import { css } from '@emotion/react';

function Page(props) {
	const { t } = useTranslation();

	return (
		<Layout t={t} bodyclassName="index">
			<WebsiteMeta
				title="Crypto VPN App | Orchid"
				description="Orchid provides the best crypto powered VPN by harnessing the power of blockchain technology to ensure digital privacy."
				image="/img/index/social.png"
				location={props.location}
			/>
			<Helmet>
				<body className="index-page" />
			</Helmet>

			<section css={css`
					position: relative;
					padding: 2rem 0;
					padding-top: 3rem;
					@media (min-width: 768px) {
						margin-top: 1rem;
						padding: 5rem 0;
					}
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					@media (max-width: 870px) {
						align-items: center;
						flex-direction: column-reverse;
						padding-top: 9vw;
					}
				`}>
				<div css={css`
						position: relative;
						z-index: 1;
						text-align: center;
						max-width: 40rem;
						width: 95%;
						font-size: 1.5rem;
						& > h3 {
							color: inherit;
							&.color-primary {
								color: var(--orc-purple);
							}
							line-height: 1rem;
							& > span {
								display: inline-block;
								margin: 0.5em 0.2em;
								@media (max-width: 870px) {
									margin: 0.2em 0;
								}
							}
						}
						small,
						button {
							font-family: var(--font-family-heading);
						}
						small {
							font-weight: 400;
							font-size: 70%;
						}
						button {
							margin-top: 1rem;
							padding: 0.4rem 3rem;
						}
						svg {
							max-width: 100%;
							width: 616px;
							height: auto;
							@media screen and (min-width: (870px + 1px)) {
								margin-bottom: 1rem;
							}
							@media (max-width: 870px) {
								max-width: 300px;
								width: 100%;
							}
						}
						font-weight: 200;
						@media (min-width: 60rem) {
							margin-right: 5rem;
						}
					`}>
					<svg alt="Don't be a product" width="616" height="314" viewBox="0 0 616 314" fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<g filter="url(#filter0_d)">
							<path d="M62.46 93.34C62.46 119.567 54.1533 132.68 37.54 132.68H18.78C17.4733 132.68 16.82 131.887 16.82 130.3L16.68 20.26C16.68 18.86 17.24 18.1133 18.36 18.02C21.44 17.8333 28.44 17.7867 39.36 17.88C47.6667 17.7867 53.8267 21.8467 57.84 30.06C60.92 36.5 62.46 44.9 62.46 55.26V93.34ZM44.54 88.02V53.02C44.54 49.1 43.4667 45.4133 41.32 41.96C39.2667 38.4133 37.0267 36.64 34.6 36.64C33.8533 36.64 33.48 37.2933 33.48 38.6C33.48 38.9733 33.5267 48.3533 33.62 66.74C33.62 85.0333 33.62 99.78 33.62 110.98C33.62 112.38 33.9467 113.08 34.6 113.08C36.84 113.173 39.0333 110.653 41.18 105.52C43.42 100.293 44.54 94.46 44.54 88.02ZM110.907 110.28C110.907 125.96 103.44 133.8 88.5066 133.8C80.7599 133.8 75.2066 131.84 71.8466 127.92C68.6732 124.28 67.0866 118.4 67.0866 110.28V45.46C67.0866 35.2867 69.1399 28.0533 73.2466 23.76C76.6066 20.2133 81.6932 18.44 88.5066 18.44C95.7866 18.44 101.107 19.98 104.467 23.06C108.76 26.98 110.907 33.8867 110.907 43.78V110.28ZM93.1266 103.98V47.28C93.1266 41.7733 91.8199 39.02 89.2066 39.02C86.3132 39.02 84.8666 41.82 84.8666 47.42V104.12C84.8666 107.2 85.1932 109.16 85.8466 110C86.4999 110.747 87.6199 111.12 89.2066 111.12C91.8199 111.12 93.1266 108.74 93.1266 103.98ZM169.749 21.8C169.656 16.9467 169.423 52.6 169.049 128.76C169.049 131.187 168.303 132.54 166.809 132.82C162.329 133.567 157.616 133.567 152.669 132.82C150.989 132.54 149.916 131.56 149.449 129.88C146.369 115.88 142.776 100.013 138.669 82.28C138.296 80.88 137.736 80.18 136.989 80.18C136.429 80.18 136.149 81.16 136.149 83.12C136.149 85.08 136.149 91.7067 136.149 103C136.056 114.2 136.009 122.927 136.009 129.18C136.009 131.047 134.843 132.213 132.509 132.68C130.923 133.053 128.823 133.193 126.209 133.1C122.849 133.007 120.936 132.96 120.469 132.96C118.603 133.053 117.623 131.98 117.529 129.74C117.156 116.673 117.063 96.98 117.249 70.66C117.436 45.18 117.763 28.9867 118.229 22.08C118.416 19.84 119.023 18.6733 120.049 18.58C122.289 18.4867 125.323 18.4867 129.149 18.58C133.816 18.7667 136.336 18.86 136.709 18.86C138.016 18.86 138.856 19.84 139.229 21.8C143.896 44.3867 147.163 58.9467 149.029 65.48C149.776 68 150.383 69.26 150.849 69.26C151.503 69.26 151.736 67.8133 151.549 64.92C151.176 57.36 150.989 42.9867 150.989 21.8C150.989 19.6533 151.923 18.6267 153.789 18.72C156.963 18.72 161.303 18.72 166.809 18.72C168.769 18.8133 169.749 19.84 169.749 21.8ZM199.057 14.66C199.151 18.02 199.104 28.4267 198.917 45.88C198.917 50.4533 196.304 53.7667 191.077 55.82C187.811 57.0333 184.217 57.64 180.297 57.64C178.711 57.64 177.917 57.2667 177.917 56.52C177.917 55.68 177.917 54.28 177.917 52.32C178.011 49.8933 178.057 48.4 178.057 47.84C178.057 47.1867 178.571 46.86 179.597 46.86C181.837 46.86 183.797 46.3467 185.477 45.32C187.251 44.2 188.137 42.6133 188.137 40.56V35.52C188.137 34.68 187.391 34.3067 185.897 34.4C182.537 34.4933 180.297 34.4933 179.177 34.4C177.871 34.2133 177.217 33.56 177.217 32.44C177.124 28.0533 177.171 22.0333 177.357 14.38C177.357 13.26 178.057 12.7 179.457 12.7C187.484 12.7 193.177 12.7467 196.537 12.84C198.217 12.84 199.057 13.4467 199.057 14.66ZM253.059 35.52C253.059 36.8267 252.266 37.48 250.679 37.48C250.026 37.48 248.626 37.4333 246.479 37.34C244.426 37.34 242.746 37.34 241.439 37.34C239.479 37.34 238.499 38.04 238.499 39.44L238.779 129.74C238.779 131.233 238.266 132.027 237.239 132.12C233.879 132.587 228.559 132.54 221.279 131.98C220.066 131.887 219.459 131.093 219.459 129.6L219.319 39.3C219.319 37.9933 218.759 37.34 217.639 37.34C210.732 37.34 207.279 37.34 207.279 37.34C205.786 37.2467 205.039 36.5933 205.039 35.38C205.039 36.4067 204.946 34.4933 204.759 29.64C204.572 26.4667 204.666 23.9933 205.039 22.22C205.412 19.7933 206.252 18.58 207.559 18.58C219.132 18.4867 233.552 18.4867 250.819 18.58C252.126 18.58 252.826 19.42 252.919 21.1C253.106 26.8867 253.152 31.6933 253.059 35.52ZM335.406 116.58C335.406 123.207 332.186 127.687 325.746 130.02C320.8 131.887 312.493 132.82 300.826 132.82H287.386C286.453 132.82 285.986 132.12 285.986 130.72L285.846 19.28C285.846 18.16 286.126 17.6 286.686 17.6H313.006C318.606 17.6 323.46 19.7 327.566 23.9C331.673 28.0067 333.68 32.8133 333.586 38.32L333.446 53.16C333.353 58.6667 332.793 62.68 331.766 65.2C330.366 68.56 327.473 71.5467 323.086 74.16C326.166 75.6533 328.92 78.08 331.346 81.44C334.053 85.1733 335.406 89 335.406 92.92V116.58ZM314.546 44.9C314.64 41.7267 314.36 39.4867 313.706 38.18C312.773 36.22 310.86 35.24 307.966 35.24C306.38 35.1467 305.306 35.1467 304.746 35.24C304.186 35.3333 303.906 35.8 303.906 36.64C304 41.3067 304.046 49.8467 304.046 62.26C304.046 63.4733 304.373 64.08 305.026 64.08C306.893 64.2667 308.853 63.8 310.906 62.68C313.053 61.4667 314.173 59.7867 314.266 57.64L314.546 44.9ZM315.246 101.88L315.106 93.62C315.013 88.3 311.84 85.64 305.586 85.64C304.933 85.64 304.606 86.1533 304.606 87.18C304.606 87.18 304.606 95.5333 304.606 112.24C304.606 113.453 305.12 114.06 306.146 114.06H308.106C312.96 114.06 315.34 110 315.246 101.88ZM380.141 130.86C380.141 131.98 379.394 132.587 377.901 132.68C365.021 133.333 353.307 133.24 342.761 132.4C341.734 132.307 341.221 131.42 341.221 129.74L341.081 20.4C341.081 19.3733 341.594 18.86 342.621 18.86C349.807 18.7667 361.427 18.8133 377.481 19C378.974 19 379.721 19.56 379.721 20.68C379.721 22.1733 379.721 24.6933 379.721 28.24C379.627 32.6267 379.581 35.4267 379.581 36.64C379.581 37.76 379.067 38.32 378.041 38.32C374.307 38.32 368.941 38.32 361.941 38.32C360.541 38.32 359.841 38.8333 359.841 39.86C359.841 40.3267 359.794 43.64 359.701 49.8C359.607 55.0267 359.607 58.9467 359.701 61.56C359.701 62.5867 360.261 63.1933 361.381 63.38C363.341 63.66 367.681 63.7067 374.401 63.52C375.614 63.52 376.267 64.08 376.361 65.2C376.454 66.88 376.407 70.0067 376.221 74.58C376.034 79.9 375.941 83.0267 375.941 83.96C375.941 85.2667 375.427 85.92 374.401 85.92C374.401 85.92 370.201 85.92 361.801 85.92C360.867 85.92 360.307 86.62 360.121 88.02C359.654 91.94 359.561 99.36 359.841 110.28C359.841 111.493 360.681 112.193 362.361 112.38C366.001 112.287 371.134 112.193 377.761 112.1C379.254 112.1 380.001 112.707 380.001 113.92C380.001 121.48 380.047 127.127 380.141 130.86ZM174.653 292.12C174.746 292.68 174.326 292.96 173.393 292.96C172.086 292.96 169.659 292.96 166.113 292.96C162.566 292.867 159.486 292.82 156.873 292.82C156.033 292.82 154.959 289.787 153.653 283.72C152.719 279.147 152.019 275.227 151.553 271.96C151.459 271.307 150.946 270.98 150.013 270.98C146.373 270.98 144.553 270.98 144.553 270.98C143.899 270.98 143.479 271.307 143.293 271.96C142.453 277.56 141.333 284.047 139.933 291.42C139.559 292.26 139.139 292.68 138.673 292.68H121.453C119.959 292.68 119.353 292.12 119.633 291C122.806 271.96 125.979 252.873 129.153 233.74C135.406 196.967 139.139 178.533 140.353 178.44C145.393 178.16 150.433 178.16 155.473 178.44C156.593 178.533 160.046 197.013 165.833 233.88C168.819 253.293 171.759 272.707 174.653 292.12ZM150.293 253.34C148.893 242.7 148.006 237.38 147.633 237.38C147.166 237.38 146.606 239.667 145.953 244.24C145.579 247.227 145.206 250.26 144.833 253.34C144.739 253.62 145.159 253.853 146.093 254.04C147.119 254.133 148.053 254.133 148.893 254.04C149.826 253.947 150.293 253.713 150.293 253.34ZM249.953 230.24C249.953 237.053 246.966 242.327 240.993 246.06C236.606 248.767 231.893 250.12 226.853 250.12C225.639 250.12 225.033 250.773 225.033 252.08C225.033 260.573 224.939 273.313 224.753 290.3C224.753 291.793 224.239 292.587 223.213 292.68C219.946 293.053 214.999 293.053 208.373 292.68C207.159 292.587 206.553 291.98 206.553 290.86L206.273 180.26C206.273 179.233 207.066 178.673 208.653 178.58C212.479 178.393 218.686 178.44 227.273 178.72C232.779 178.72 237.819 180.353 242.393 183.62C247.433 187.073 249.953 191.413 249.953 196.64V230.24ZM233.293 214.42C233.386 208.167 233.106 203.64 232.453 200.84C231.893 198.693 231.099 197.387 230.073 196.92C229.046 196.827 228.066 196.733 227.133 196.64C226.759 196.64 226.059 196.547 225.033 196.36C224.659 196.267 224.333 196.453 224.053 196.92C223.773 197.387 223.679 197.9 223.773 198.46C223.773 205.553 223.819 215.68 223.913 228.84C223.913 229.68 224.379 230.287 225.313 230.66C225.779 230.847 226.386 230.8 227.133 230.52C229.373 230.333 230.819 229.633 231.473 228.42C232.593 226.273 233.199 221.607 233.293 214.42ZM301.044 289.74C301.511 291.793 301.044 292.867 299.644 292.96C297.871 293.147 292.411 293.1 283.264 292.82C282.237 292.82 281.631 291.56 281.444 289.04C280.977 282.693 280.744 275.647 280.744 267.9C280.744 253.807 278.271 246.76 273.324 246.76C272.671 246.573 272.111 246.573 271.644 246.76C270.991 247.04 270.664 248.067 270.664 249.84C270.664 264.493 270.617 277.373 270.524 288.48C270.524 290.907 270.011 292.167 268.984 292.26C263.944 292.82 259.137 292.913 254.564 292.54C253.444 292.447 252.884 291.093 252.884 288.48L253.164 180.68C253.164 179 254.004 178.16 255.684 178.16C260.817 178.16 267.817 178.113 276.684 178.02C282.471 178.02 287.371 179.233 291.384 181.66C295.771 184.367 297.964 187.96 297.964 192.44L297.824 220.02C297.824 224.593 296.471 228.513 293.764 231.78C291.897 234.113 289.797 235.7 287.464 236.54C286.717 236.82 286.344 237.1 286.344 237.38C286.344 237.567 286.717 237.8 287.464 238.08C289.237 238.64 291.104 239.807 293.064 241.58C297.451 245.407 299.644 254.693 299.644 269.44C299.644 278.867 300.111 285.633 301.044 289.74ZM280.884 204.34C280.884 198.18 278.831 195.24 274.724 195.52C273.791 195.613 273.091 195.66 272.624 195.66C271.784 195.66 271.364 196.453 271.364 198.04C271.364 198.04 271.364 206.253 271.364 222.68C271.364 225.293 272.017 226.647 273.324 226.74C273.791 226.833 274.351 226.833 275.004 226.74C277.057 226.74 278.457 225.713 279.204 223.66C280.324 220.673 280.884 214.233 280.884 204.34ZM350.164 270.28C350.164 285.96 342.698 293.8 327.764 293.8C320.018 293.8 314.464 291.84 311.104 287.92C307.931 284.28 306.344 278.4 306.344 270.28V205.46C306.344 195.287 308.398 188.053 312.504 183.76C315.864 180.213 320.951 178.44 327.764 178.44C335.044 178.44 340.364 179.98 343.724 183.06C348.018 186.98 350.164 193.887 350.164 203.78V270.28ZM332.384 263.98V207.28C332.384 201.773 331.078 199.02 328.464 199.02C325.571 199.02 324.124 201.82 324.124 207.42V264.12C324.124 267.2 324.451 269.16 325.104 270C325.758 270.747 326.878 271.12 328.464 271.12C331.078 271.12 332.384 268.74 332.384 263.98ZM404.667 253.34C404.667 279.567 396.36 292.68 379.747 292.68H360.987C359.68 292.68 359.027 291.887 359.027 290.3L358.887 180.26C358.887 178.86 359.447 178.113 360.567 178.02C363.647 177.833 370.647 177.787 381.567 177.88C389.874 177.787 396.034 181.847 400.047 190.06C403.127 196.5 404.667 204.9 404.667 215.26V253.34ZM386.747 248.02V213.02C386.747 209.1 385.674 205.413 383.527 201.96C381.474 198.413 379.234 196.64 376.807 196.64C376.06 196.64 375.687 197.293 375.687 198.6C375.687 198.973 375.734 208.353 375.827 226.74C375.827 245.033 375.827 259.78 375.827 270.98C375.827 272.38 376.154 273.08 376.807 273.08C379.047 273.173 381.24 270.653 383.387 265.52C385.627 260.293 386.747 254.46 386.747 248.02ZM458.854 181.1L458.574 267.76C458.574 273.173 457.407 277.933 455.074 282.04C451.06 289.133 444.2 292.68 434.494 292.68C423.574 292.68 416.48 290.067 413.214 284.84C410.974 281.48 409.854 274.993 409.854 265.38V181.1C409.854 180.353 409.994 179.747 410.274 179.28C410.647 178.72 411.114 178.44 411.674 178.44C411.674 178.44 416.667 178.44 426.654 178.44C428.24 178.44 429.034 179.14 429.034 180.54C429.034 183.713 429.034 198.227 429.034 224.08C428.94 249.933 428.894 262.533 428.894 261.88C428.894 269.16 430.807 272.8 434.634 272.8C437.994 272.8 439.674 269.16 439.674 261.88V181.24C439.58 179.373 440.187 178.44 441.494 178.44C450.734 178.44 455.914 178.487 457.034 178.58C458.247 178.673 458.854 179.513 458.854 181.1ZM512.388 262.44C512.388 271.027 510.568 278.073 506.928 283.58C502.822 289.833 496.848 292.96 489.008 292.96C479.862 292.96 473.515 289.04 469.968 281.2C467.542 275.787 466.328 267.527 466.328 256.42V202.38C466.328 197.433 467.682 192.487 470.388 187.54C474.495 179.98 480.702 176.2 489.008 176.2C497.875 176.2 504.222 179.56 508.048 186.28C511.128 191.413 512.575 198.273 512.388 206.86C512.388 209.66 512.342 211.807 512.248 213.3C512.155 214.793 511.455 215.633 510.148 215.82C508.842 216.007 506.508 216.053 503.148 215.96C498.482 215.773 496.382 215.68 496.848 215.68C495.168 215.68 494.282 214.887 494.188 213.3C494.188 209.94 494.188 206.627 494.188 203.36C493.628 198.507 491.902 196.08 489.008 196.08C485.182 196.08 483.268 204.387 483.268 221V260.76C483.268 263.373 483.642 265.847 484.388 268.18C485.415 271.447 486.955 273.08 489.008 273.08C492.648 273.08 494.468 268.18 494.468 258.38C494.468 257.26 494.468 255.953 494.468 254.46C494.375 252.873 494.328 251.94 494.328 251.66C494.328 249.98 494.982 249.14 496.288 249.14C502.168 249.14 506.835 249.187 510.288 249.28C511.688 249.28 512.388 250.073 512.388 251.66C512.482 254.087 512.482 257.68 512.388 262.44ZM565.872 195.52C565.872 196.827 565.078 197.48 563.492 197.48C562.838 197.48 561.438 197.433 559.292 197.34C557.238 197.34 555.558 197.34 554.252 197.34C552.292 197.34 551.312 198.04 551.312 199.44L551.592 289.74C551.592 291.233 551.078 292.027 550.052 292.12C546.692 292.587 541.372 292.54 534.092 291.98C532.878 291.887 532.272 291.093 532.272 289.6L532.132 199.3C532.132 197.993 531.572 197.34 530.452 197.34C523.545 197.34 520.092 197.34 520.092 197.34C518.598 197.247 517.852 196.593 517.852 195.38C517.852 196.407 517.758 194.493 517.572 189.64C517.385 186.467 517.478 183.993 517.852 182.22C518.225 179.793 519.065 178.58 520.372 178.58C531.945 178.487 546.365 178.487 563.632 178.58C564.938 178.58 565.638 179.42 565.732 181.1C565.918 186.887 565.965 191.693 565.872 195.52ZM599.276 289.46C599.276 291.513 598.669 292.54 597.456 292.54C595.496 292.54 592.462 292.587 588.356 292.68C584.809 292.773 582.149 292.82 580.376 292.82C578.602 292.82 577.669 292.353 577.576 291.42C577.482 290.487 577.436 284.56 577.436 273.64C577.436 271.773 577.949 270.84 578.976 270.84C580.002 270.84 582.616 270.793 586.816 270.7C591.016 270.513 594.376 270.42 596.896 270.42C598.389 270.42 599.136 270.887 599.136 271.82C599.229 274.433 599.276 280.313 599.276 289.46Z" fill="url(#paint0_linear)" />
						</g>
						<defs>
							<filter id="filter0_d" x="0.679932" y="0.700012" width="614.596" height="313.1" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
								<feFlood floodOpacity="0" result="BackgroundImageFix" />
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
								<feOffset dy="4" />
								<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
								<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
								<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
							</filter>
							<linearGradient id="paint0_linear" x1="296.813" y1="-0.999999" x2="349.831" y2="302.794" gradientUnits="userSpaceOnUse">
								<stop stopColor="#504960" />
								<stop offset="1" stopColor="#3A3149" />
							</linearGradient>
						</defs>
					</svg>

					<h3>
						<span style={{ display: "inline-block" }}><Trans>No data collection.</Trans></span>
						<span style={{ display: "inline-block" }}><Trans>No 3rd-party sharing.</Trans></span>
						<span style={{ display: "inline-block" }}><Trans>No profit markup.</Trans></span>
					</h3>
					<h3 className="color-primary"><span><Trans>A new model of VPN.</Trans></span></h3>
					<Link to="/get-orchid" className="btn">
						<button className="btn-primary"><Trans>Get Orchid</Trans></button>
					</Link>
					<br />
					<small><Trans>(starting at just $1)</Trans></small>
				</div>
				<div css={css`
						width: 400px;
						max-width: 60%;
						@media (max-width: 870px) {
							max-width: 30%;
							margin-bottom: 1rem;
						}
						position: relative;
						& > img {
							position: relative;
							z-index: 1;
						}
						&::before {
							content: "";
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							background-image: url(/img/index/wavy-lines-01.svg);
							background-size: contain;
							background-repeat: no-repeat;
							background-position: center;
							transform: scale(2.5) translateX(5%) translateY(5%);
							pointer-events: none;
						}
					`}>
					<StaticImage loading="eager" src="../../static/img/index/phone.png" placeholder="tracedSVG" width={491} height={765} alt="" />
				</div>
			</section>

			<div className="wavy-element-02"></div>

			<section className="marketplace__wrapper">
				<div className="marketplace__container container-common">
					<h2 className="section-heading"><Trans>Orchid is a decentralized bandwidth marketplace</Trans></h2>
					<p>
						<Trans>
							Buyers use the <Link to="/download">Orchid app</Link> to get protection from snooping ISP's, unblock websites cutoff by firewalls, and for many other privacy benefits. Sellers receive payments in real-time as they provide service and stake <Link to="/oxt">OXT</Link> to compete for service requests. Orchid Technologies charges no fees, and the community maintains the <a href="https://github.com/OrchidTechnologies">Open Source software</a> that powers the entire ecosystem. Try it out!
						</Trans>
					</p>
					<StaticImage loading="lazy" src="../../static/img/index/marketplace.png" placeholder="none" width={1600} height={368} alt="" />
					<div className="marketplace-steps">
						<div>
							<h3><Trans>Fund your Orchid account</Trans></h3>
							<p><Trans>Fund in-app with your native fiat currency or use the DApp to fund an account with your crypto.</Trans></p>
						</div>
						<div>
							<h3><Trans>Connect to a random provider</Trans></h3>
							<p><Trans>Tap "Connect" to match with a VPN server that has locked up OXT to compete for your business.</Trans></p>
						</div>
						<div>
							<h3><Trans>Pay only for what you actually use</Trans></h3>
							<p><Trans>Orchid nanopayments mean you are never locked into a subscription and pay only for actual use.</Trans></p>
						</div>
					</div>
					<Link to="/how-it-works/" className="section-button">
						<button className="btn-secondary"><Trans>Learn More</Trans></button>
					</Link>
				</div>
			</section>

			<div className="wavy-element-03"></div>
			<div className="decorative-island">
				<StaticImage loading="lazy" src="../../static/img/index/island-01.png" placeholder="none" width={600} height={357} alt="" />
			</div>

			<section className="features__wrapper">
				<div className="features__container container-common">
					<h2 className="section-heading"><Trans>Key features</Trans></h2>
					<div className="features-list">
						<div>
							<img src="/img/index/icons/crypto.svg" alt="" width="100" height="100" />
							<h3><Trans>Crypto-powered</Trans></h3>
							<p><Trans>Pay for VPN service using one of our supported cryptocurrencies. Not crypto savvy? You can purchase a pre-loaded account right in the app.</Trans></p>
							<a href="https://docs.orchid.com/en/latest/accounts/#how-to-get-an-orchid-account"><Trans>Learn more.</Trans></a>
						</div>
						<div>
							<img src="/img/index/icons/nano.svg" alt="" width="100" height="100" />
							<h3><Trans>Nanopayment Ecosystem</Trans></h3>
							<p><Trans>Orchid uses a new probabilistic nanopayment system to scale payment throughput via cryptocurrency-backed “tickets”.</Trans></p>
							<a href="https://docs.orchid.com/en/latest/accounts/#orchid-account-efficiency"><Trans>Learn more.</Trans></a>
						</div>
						<div>
							<img src="/img/index/icons/traffic.svg" alt="" width="100" height="100" />
							<h3><Trans>Traffic Analysis</Trans></h3>
							<p><Trans>Peer into the details of your device’s connections by utilizing the built-in network protocol analyzer powered by Wireshark.</Trans></p>
							<a href="https://docs.orchid.com/en/latest/using-orchid/#using-the-traffic-monitor"><Trans>Learn more.</Trans></a>
						</div>
						<div>
							<img src="/img/index/icons/multi-hop.svg" alt="" width="100" height="100" />
							<h3><Trans>Multi-hop</Trans></h3>
							<p><Trans>Compose your own onion-routed VPN circuit by stringing together multiple ‘hops’ for increased privacy.</Trans></p>
							<a href="https://docs.orchid.com/en/latest/using-orchid/#using-the-multi-hop-interface"><Trans>Learn more.</Trans></a>
						</div>
						<div>
							<img src="/img/index/icons/servers.svg" alt="" width="100" height="100" />
							<h3><Trans>Randomized Servers</Trans></h3>
							<p><Trans>Connect randomly to an OXT-staked VPN server. Change to a new provider at any time by toggling the VPN off and back on.</Trans></p>
							<a href="https://docs.orchid.com/en/latest/faq/#technology"><Trans>Learn more.</Trans></a>
						</div>
						<div>
							<img src="/img/index/icons/sharing.svg" alt="" width="100" height="100" />
							<h3><Trans>Unlimited Sharing</Trans></h3>
							<p><Trans>Share a single account across multiple devices and/or users to help out friends and family, or protect your online activity across all of your devices.</Trans></p>
							<a href="https://docs.orchid.com/en/latest/accounts/#sharing-orchid-accounts"><Trans>Learn more.</Trans></a>
						</div>
					</div>
				</div>
			</section>

			<div className="dove-information">
				<a href="https://docs.orchid.com/">
					<button className="btn-primary"><Trans>Read the Docs</Trans></button>
				</a>
				<a href="/whitepaper/english.pdf">
					<button className="btn-secondary"><Trans>Whitepaper</Trans></button>
				</a>
			</div>

			<div className="wavy-element-04"></div>

			<section className="why-orchid__wrapper">
				<div className="why-orchid__container container-common">
					<h2 className="section-heading"><Trans>Why Orchid?</Trans></h2>
					<div className="why-orchid__flex">
						<StaticImage className="why-orchid__image" loading="lazy" src="../../static/img/index/why-orchid__phone.png" placeholder="none" width={800} height={1019} alt="" />
						<div className="why-orchid__text">

							<h4><Trans>No Subscriptions</Trans></h4>
							<p><Trans>When you buy an Orchid account via in-app purchase, your funds are converted into a crypto-backed account that you control. VPN service is paid for on a per-use basis, meaning you only pay for the bandwidth you actually use</Trans></p>

							<h4><Trans>Tracking-free</Trans></h4>
							<p><Trans>Orchid has no tracking pixels, 3rd-party javascript or any code on Orchid.com that harvests information about you. Orchid also has no tracking systems in our applications. We absolutely do not track.</Trans></p>

							<h4><Trans>Open Source</Trans></h4>
							<p><Trans>All of Orchid's code is Open Source and freely available to download <a href="https://github.com/OrchidTechnologies/orchid" target="_blank" rel="noreferrer">on GitHub</a>. Use of Orchid's source code is governed by the AGPL copyleft Open Source license. The Orchid community develops code "in the open" by continually pushing changes that anyone can see on GitHub and <a href="https://github.com/OrchidTechnologies/orchid/releases/">tagging releases</a> as appropriate.</Trans></p>

							<h4><Trans>Decentralized</Trans></h4>
							<p><Trans>Orchid brings leading providers together through a unique, decentralized privacy marketplace. Because there are more (and more widely distributed) servers available, the user\'s data has more possible paths to choose from. This randomness makes user information more difficult for would-be trackers and hackers to exploit and the service is much more resilient.</Trans></p>

							<h4><Trans>Unblock Website & Apps</Trans></h4>
							<p><Trans>Use the Orchid VPN to break through firewalls and access blocked content. Using Orchid you can access the open Internet and bypass restrictions placed by your ISP or network administrator.</Trans></p>

							<h4><Trans>Flexible</Trans></h4>
							<p><Trans>Orchid has a WireGuard and Open VPN client built into the app. Using Orchid is possible with your own VPN server setup ala Streissand or other home grown solutions - even other paid VPN services. Furthermore, Orchid allows you to string multiple types of VPN servers together, which has interesting privacy properties.</Trans></p>
						</div>
					</div>

					<YouTubeEmbed id="zJHFMxGAqyw" defaultThumbnail={true} />

					<Link to="/get-orchid" className="section-button">
						<button className="btn-secondary"><Trans>Get Orchid</Trans></button>
					</Link>
				</div>
			</section>

			<div className="wavy-element-05"></div>

			<section className="press-wrapper">
				<div className="press-container container-common">
					<h2 className="section-heading"><Trans>Orchid News</Trans></h2>
					<div className="press-list">
						<div className="press-card">
							<p className="press-card__quote">
								In a world where one assumes the Cambridge Analytica scandal is merely the tip of the iceberg
								when it comes to data abuse, it’s easy to see the project’s appeal.
							</p>
							<a href="https://techcrunch.com/2018/04/20/orchid-labs-is-in-the-process-of-raising-125-million-for-its-surveillance-free-layer-atop-the-internet/" className="footer">
								<div className="logo">
									<img width="360" height="51" src="/img/index/seen/techcrunch.png" alt="techcrunch" loading="lazy" />
								</div>
								<div className="uppercase">TECHCRUNCH</div>
								<img src="/img/index/read-more-arrow.svg" width="42" height="16" alt="" loading="lazy" />
							</a>
						</div>
						<div className="press-card">
							<p className="press-card__quote">
								This is what the future of VPN tech looks like. And you gotta see it.
							</p>
							<a href="https://www.cnet.com/news/orchid-vpn-review-it-uses-the-tech-behind-bitcoin-to-improve-privacy/" className="footer">
								<div className="logo">
									<img width="180" height="132" src="/img/index/seen/cnet.svg" alt="CNET" loading="lazy" />
								</div>
								<div className="uppercase">CNET</div>
								<img src="/img/index/read-more-arrow.svg" width="42" height="16" alt="" loading="lazy" />
							</a>
						</div>
						<div className="press-card">
							<p className="press-card__quote">
								Orchid’s mission is to build open-source software that keeps the Internet open and accessible  —
								a natural resource for everyone, everywhere.
							</p>
							<a href="https://www.coindesk.com/orchid-tops-43-million-raised-in-token-sale-for-crypto-tor-alternative" className="footer">
								<div className="logo">
									<img width="360" height="70" src="/img/index/seen/coindesk.png" alt="coindesk" loading="lazy" />
								</div>
								<div className="uppercase">COINDESK</div>
								<img src="/img/index/read-more-arrow.svg" width="42" height="16" alt="" loading="lazy" />
							</a>
						</div>
					</div>
					<h3 className="center-text vpad-thin color-gray" style={{ marginBottom: "-0.5rem" }}>The Orchid community has a lot to say as well!</h3>
					<div className="press-list">
						<div className="press-card">
							<p className="press-card__quote">
								"Orchid’s VPN could be very useful from a point of view of freedom."
								<br /><br />
								<a href="https://twitter.com/search?q=%24OXT&amp;src=cashtag_click">$OXT</a>&nbsp;<a href="https://twitter.com/hashtag/OrchidProtocol?src=hashtag_click">#OrchidProtocol</a>
								<br /><br />
								Excellent read: <a href="https://beincrypto.com/everything-is-an-economy-orchid-ceo-steven-waterhouse/">Orchid CEO Steven Waterhouse on VPNs...</a>
							</p>
							<div className="footer">
								<div className="logo offset">
									<img src="/img/index/TweetBunny.png" loading="lazy" width="273" height="201" alt="" />
								</div>
								<a className="press-card__more uppercase color-gray" href="https://twitter.com/justinsanger/status/1380986189503664131">@justinsanger</a>
							</div>
						</div>
						<div className="press-card">
							<p className="press-card__quote">
								So proud of <a href="https://twitter.com/OrchidProtocol">@OrchidProtocol</a> getting listed in the Apple app store! Privacy and internet access should be synonymous, and Orchid's decentralized VPN is a key step forward. I'm going to try a week of <a href="https://twitter.com/hashtag/OrchidAlwaysOn?src=hashtag_click">#OrchidAlwaysOn</a> and keep my VPN running in the background.
							</p>
							<div className="footer">
								<div className="logo offset">
									<img src="/img/index/TweetBunny.png" loading="lazy" width="273" height="201" alt="" />
								</div>
								<a className="press-card__more uppercase color-gray" href="https://twitter.com/collectionist/status/1281442941186129920">@collectionist</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="wavy-element-06"></div>

			<section className="blog-wrapper">
				<div className="blog-container container-common">
					<h2 className="section-heading"><Trans>From the Orchid Blog</Trans></h2>
					<div className="blog-grid">
						<BlogPosts />
					</div>
					<a href={t("https://blog.orchid.com/")} className="section-button">
						<button className="btn-secondary">
							<Trans>Go to Blog</Trans>
						</button>
					</a>
				</div>
			</section>

			{/*<div className="wavy-element-07"></div>*/}

			<section className="newsletter-wrapper">
				<div className="newsletter-container container-common">
					<h2 className="section-heading"><Trans>Connect</Trans></h2>
					<p><Trans>The Orchid community is one of the things that makes this project truly special. Follow us through one of our many social platforms, meet us in person at one of our upcoming events, and subscribe to our newsletter to stay informed about all things Orchid!</Trans></p>

					<div className="social-icons">
						<a className="inline-block" href="https://twitter.com/OrchidProtocol" target="_blank" rel="noopener noreferrer" aria-label="Follow on Twitter" title="Twitter">
							<img src="/img/shared/social-twitter-purple.svg" alt="Twitter" width="32" height="32" />
						</a>
						<a className="inline-block" href="https://discord.gg/GDbxmjxX9F" target="_blank" rel="noopener noreferrer" aria-label="Join us on Discord" title="Discord">
							<img src="/img/shared/social-discord-purple.svg" alt="Discord" width="32" height="32" />
						</a>
						<a className="inline-block" href="https://www.t.me/OrchidOfficial" target="_blank" rel="noopener noreferrer" aria-label="Join us on Telegram" title="Telegram">
							<img src="/img/shared/social-telegram-purple.svg" alt="Telegram" width="32" height="32" />
						</a>
						<a className="inline-block" href="https://github.com/OrchidTechnologies" target="_blank" rel="noopener noreferrer" aria-label="See the Source" title="Github">
							<img src="/img/shared/social-github-purple.svg" alt="Github" width="32" height="32" />
						</a>
						<a className="inline-block" href="https://www.facebook.com/OrchidProtocol" target="_blank" rel="noopener noreferrer" aria-label="Follow on Facebook" title="Facebook">
							<img src="/img/shared/social-facebook-purple.svg" alt="Facebook" width="32" height="32" />
						</a>
						<a className="inline-block" href="https://www.reddit.com/r/orchid/" target="_blank" rel="noopener noreferrer" aria-label="Check out our Subreddit" title="Reddit">
							<img src="/img/shared/social-reddit-purple.svg" alt="Reddit" width="32" height="32" />
						</a>
					</div>

					<h3><Trans>Let’s stay connected</Trans></h3>
					<p><Trans>Get the Orchid Onlooker newsletter for updates and privacy news</Trans></p>
					<NewsletterSignupCore t={t} largePadding="true" />
				</div>
			</section>
		</Layout>
	);
}

export default Page;

export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: {language: {eq: $language}}) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;