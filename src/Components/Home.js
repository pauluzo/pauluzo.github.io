import React from 'react';

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			height: window.innerHeight
		}

		this.updateDimensions = this.updateDimensions.bind(this);
	}

	updateDimensions() {
		this.setState({
			height: window.innerHeight
		})
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions);
	}
	
  render() {
		return(
			<div className='Home' style={{height: (this.state.height - 30)}}>
				<h1>Hello There, <br/>I'm Paul,</h1>
				<span>and I am a full-stack developer.</span>
				<p>
					Welcome to my portfolio website, where I reflect professional
					update about myself and the projects I have worked on. Please explore!
				</p>
			</div>
		);
	}
}

export default Home;