export default function elapsedTime(timeEvents) {
  let elapsed = 0
  let start, stop

  for(let i=0; i < timeEvents.length; i+=2) {
    start = timeEvents[i]
    stop = timeEvents[i+1] || new Date()
    elapsed += (stop - start)
  }

  return elapsed
}
