import React from 'react'

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    }
  }

  tick() {
    this.setState({ time: new Date() })
  }


  componentDidMount() {
    this.intervalId = setInterval(this.tick.bind(this), 1000);
  }


  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const timeString = this.state.time.toLocaleTimeString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
      });
    const dateString = this.state.time.toDateString();
    return (
    <div className="clock">
      <p className="time"><span>Time:</span><span>{ timeString }</span></p>
      <p className="date"><span>Date:</span><span>{ dateString }</span></p>
    </div>
    )
    
  }
}