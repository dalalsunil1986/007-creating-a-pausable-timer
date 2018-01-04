import React from 'react'

export default function ActionButtons(props) {
  const label = !props.hasStarted ? 'Start' : 'Resume'
  return (
    <span>
      {
        !props.hasStopped
          ? (
            !props.isRunning
              ? (
                <button
                  onClick={props.startTimer}
                >{label}</button>
              )
              : (
                  <button
                    onClick={props.pauseTimer}
                  >Pause</button>
              )
          )
          : null
      }
      {
        props.hasStarted
          ? (
            <button
              onClick={props.stopTimer}
            >Stop</button>
          )
          : null
      }
    </span>
  )
}