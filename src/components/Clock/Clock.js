import React, { Component } from 'react';
import './Clock.scss';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    console.log('setInterval');

    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    //не даёт запустится отлоденной ф - ции(setInterval)
    //при размонтировании(скрытии эл.) не даёт запустится отлоденной ф - ции(setInterval)
  }

  render() {
    return <div className="Clock__face">{this.state.time}</div>;
  }
}
