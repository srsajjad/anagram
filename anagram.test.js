require = require('esm')(module)
const { checkAnagram } = require('./anagram')

test('checking anagram - to be false', () => {
  expect(checkAnagram('hello', 'holaa')).toBe(false)
})

test('checking anagram - to be true', () => {
  expect(checkAnagram('eat', 'ate')).toBe(true)
})
