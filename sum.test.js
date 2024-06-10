import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './sum';

test('dog with the first character capitalized should be Dog', () => {
  expect(capitalize('dog')).toBe('Dog')
})

test('when RETURN is reversed it have to be NRUTER', () => {
  expect(reverseString('RETURN')).toBe('NRUTER')
})

test('20 + 10 = 30', () => {
  expect(calculator.add(20, 10)).toBe(30)
})

test('20 - 10 = 10', () => {
  expect(calculator.subtract(20, 10)).toBe(10)
})

test('20 / 10 = 2', () => {
  expect(calculator.divide(20, 10)).toBe(2)
})

test('20 * 10 = 200', () => {
  expect(calculator.multiply(20, 10)).toBe(200)
})

test('Hello, WorldZy! must turn to Khoor, ZruogCb!', () => {
  expect(caesarCipher('Hello, WorldZy!', 3)).toBe('Khoor, ZruogCb!')
})

test('min, max, average and length of [1,2,3,6] will be {min: 1, max: 6, average: 3, length: 4}', () => {
  expect(analyzeArray([1,2,3,6])).toEqual({min: 1, max: 6, average: 3, length: 4})
})
