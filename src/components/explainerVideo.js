import React from 'react'
import './explainerVideo.scss'

class Component extends React.Component {
	constructor() {
		super();
		this.state = {
			js: false,
		};
	}
	componentWillMount() {
		this.setState({
			js: true,
		});
	}
	render() {
		return (
			<div className={"video-section" + (this.state.js ? ' js' : '')}>
				<section className="section-narrow hgap-thin vgap-wide z-index-1 center-text">
					<div className="video">
						<a href="https://www.youtube.com/watch?v=zJHFMxGAqyw">Watch a video about Orchid on YouTube</a>
					</div>
				</section>
			</div >
		)
	}
}

export default Component
