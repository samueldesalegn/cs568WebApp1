import React from "react";

export default class Timer extends React.Component{
	state = {seconds: 0, minutes: 0, running: false, interval: null};
	update =() => {
		// console.log("Updated")
			let {seconds, minutes} = this.state;
			if (seconds === 59) {
				seconds = 0;
				minutes += 1;
				this.setState({seconds, minutes});
			}else {
				seconds += 1;
				this.setState({seconds});
			}
	};
	startTimer = () => {
		if (this.state.running) {
			clearInterval(this.state.interval);
			this.setState({running: false})
			return;
		}
		let interval = setInterval(this.update, 1000);
		this.setState({running: true, interval})
	}
	reset = () => {
		this.setState({seconds: 0, minutes: 0, running: true, interval: null})

	}
	componentWillUnmount() {
		clearInterval(this.state.interval);
	}
	render() {
		return (
			<div>

				<p>{this.state.minutes} : {this.state.seconds}</p>
				<button onClick={this.startTimer}>{this.state.running? "Stop": "Start"}</button>
				<button onClick={this.reset}>Reset</button>
			</div>
		);
	}
}