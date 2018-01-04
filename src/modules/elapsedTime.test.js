import elapsedTime from './elapsedTime'

test('calculate 5 minutes three events', () => {
  const timeEvents = [
    new Date('Sat Dec 30 2017 22:00:00 GMT-0600 (CST)'),
    new Date('Sat Dec 30 2017 22:05:00 GMT-0600 (CST)'),
    new Date('Sat Dec 30 2017 22:10:00 GMT-0600 (CST)'),
  ]

  expect(elapsedTime(timeEvents)).toBe(5 * 60 * 1000)
})

test('calculate 5 minutes two events', () => {
  const timeEvents = [
    new Date('Sat Dec 30 2017 22:00:00 GMT-0600 (CST)'),
    new Date('Sat Dec 30 2017 22:05:00 GMT-0600 (CST)'),
  ]

  expect(elapsedTime(timeEvents)).toBe(5 * 60 * 1000)
})

test('calculate 10 minutes two events', () => {
  const timeEvents = [
    new Date('Sat Dec 30 2017 22:00:00 GMT-0600 (CST)'),
    new Date('Sat Dec 30 2017 22:10:00 GMT-0600 (CST)'),
  ]

  expect(elapsedTime(timeEvents)).toBe(10 * 60 * 1000)
})

test('calculate 10 minutes 4 events', () => {
  const timeEvents = [
    new Date('Sat Dec 30 2017 22:00:00 GMT-0600 (CST)'),
    new Date('Sat Dec 30 2017 22:05:00 GMT-0600 (CST)'),
    new Date('Sat Dec 30 2017 22:10:00 GMT-0600 (CST)'),
    new Date('Sat Dec 30 2017 22:15:00 GMT-0600 (CST)'),
  ]

  expect(elapsedTime(timeEvents)).toBe(10 * 60 * 1000)
})
