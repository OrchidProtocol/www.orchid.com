import React from 'react'
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';

const VideoContainer = styled.div`
	& > section {
		box-sizing: border-box;
		max-width: 720px;
	}
	.video {
		position: relative;
		padding-bottom: 56.25%;
		height: 0;
		width: 100%;
		border-radius: 24px;
		overflow: hidden;

		& > iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: 0;
			z-index: 999;
		}

		& > a {
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			font-size: 0;

			&::before,
			&::after {
				content: "";
				display: block;
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
			&::before {
				background-color: rgba(0, 0, 0, 0.1);
				box-shadow: 0px 0px 10% rgba(0, 0, 0, 0.2) inset;
			}
			&::after {
				background-size: auto 50px;
				@media (max-width: 960px) {
					background-size: auto 35px;
				}
				background-position: center;
				background-repeat: no-repeat;
				background-image: url(/img/vpn/yt_icon_mono_light.png);
			}
			&:hover::after {
				background-image: url(/img/vpn/yt_icon_rgb.png);
			}
		}
	}
`;

class Component extends React.Component {
	constructor() {
		super();
		this.state = {
			js: false,
			showVideo: false,
		};
	}
	componentDidMount() {
		this.setState({
			js: true,
		});
	}
	revealVideo(e) {
		e.preventDefault();
		this.setState({
			showVideo: true,
		});
	}
	render() {
		return (
			<VideoContainer className={(this.state.js ? 'js' : '')} data-defaultthumb={this.props.defaultThumbnail}>
				<section className="section-narrow hgap-thin vgap-wide z-index-1 center-text">
					<div className="video">
						{this.state.showVideo ?
							<iframe allowFullScreen title={"YouTube video embed " + this.props.id} src={"https://www.youtube-nocookie.com/embed/" + this.props.id + "?autoplay=true"} /> :
							<a onClick={this.revealVideo.bind(this)} href={"https://www.youtube.com/watch?v=" + this.props.id}>
								<StaticImage src="../../static/img/vpn/video-thumbnail.jpg" width={720} height={405} loading="lazy" placeholder="none" alt="Video thumbnail" />
							</a>}
					</div>
				</section>
			</VideoContainer>
		)
	}
}

export default Component
