import React from 'react'
import formatDuration from 'format-duration'

import ActionButtons from './action-buttons'
import _elapsedTime from '../../modules/elapsedTime'

import './styles.css'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    const timingEvents = JSON.parse(
      localStorage.getItem('timingEvents')
    ) || []
    const stopped = JSON.parse(localStorage.getItem('stopped')) || false
    this.state = {
      timingEvents: timingEvents.map(date => new Date(date)),
      stopped,
      nonce: 0,
    }

    this.elapsedTime = this.elapsedTime.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.pauseTimer = this.pauseTimer.bind(this)
    this.addTimingEvent = this.addTimingEvent.bind(this)
    this.isRunning = this.isRunning.bind(this)
    this.hasStarted = this.hasStarted.bind(this)
    this.tick = this.tick.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    this.setState((prevState) => ({ nonce: prevState.nonce+1 }))
  }

  elapsedTime() {
    return _elapsedTime(this.state.timingEvents)
  }

  addTimingEvent() {
    const timingEvents = [...this.state.timingEvents, new Date()]
    localStorage.setItem('timingEvents',
      JSON.stringify(timingEvents)
    )
    this.setState({timingEvents})
  }

  startTimer() {
    this.addTimingEvent()
  }

  pauseTimer() {
    if (!this.hasStopped())
      this.addTimingEvent()
  }

  stopTimer() {
    if (this.hasStopped()) return
    this.addTimingEvent()
    localStorage.setItem('stopped', JSON.stringify(true))
    this.setState({ stopped: true })
  }

  isRunning() {
    return !this.hasStopped() &&
           this.state.timingEvents.length % 2
  }

  hasStarted() {
    return this.state.timingEvents.length > 0
  }

  hasStopped() {
    return this.state.stopped
  }

  render() {
    return (
      <div className='container'>
        <span>
          { formatDuration(this.elapsedTime()) }
        </span>
        <ActionButtons
          hasStarted={this.hasStarted()}
          hasStopped={this.hasStopped()}
          isRunning={this.isRunning()}
          startTimer={this.startTimer}
          pauseTimer={this.pauseTimer}
          stopTimer={this.stopTimer}
        />
      </div>
    )
  }
}

export default Timer
