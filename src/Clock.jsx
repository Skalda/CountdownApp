import React from 'react';
import './App.css';

class Clock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      'days': 0,
      'hours': 0,
      'minutes': 0,
      'seconds': 0,
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leading0(number) {
    return number < 10 ? "0" + number : number;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor((time/(60*1000))%60);
    const hours = Math.floor((time/(60*60*1000))%24);
    const days = Math.floor(time/(24*60*60*1000));

    this.setState({days, hours, minutes, seconds});
  }

  render() {
    return (
      <div className="time">
        <div className="days">{this.state.days} days</div>
        <div className="hours">{this.leading0(this.state.hours)} hours</div>
        <div className="minutes">{this.leading0(this.state.minutes)} minutes</div>
        <div className="seconds">{this.leading0(this.state.seconds)} seconds</div>
      </div>
    );
  }

}

export default Clock;