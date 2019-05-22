require = require('esm')(module)
const { checkSameLength } = require('./checkSameLength.js')

test('checking same length - to be true', () => {
  expect(checkSameLength(['eat', 'ate'])).toBe(true)
})

test('checking same length - to be false', () => {
  expect(checkSameLength(['lol', 'rofl'])).toBe(false)
})
