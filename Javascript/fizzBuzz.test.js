const fizzBuzz = require('./fizzBuzz')

test('if the number is not divisible by 3 or 5 it returns the number', ()=> {
  expect(fizzBuzz(1)).toBe(1);
})
test('if the number is divisible by 3 it returns the Fizz', ()=> {
  expect(fizzBuzz(3)).toBe('Fizz');
})
test('if the number is divisible by 5 it returns the Buzz', ()=> {
  expect(fizzBuzz(10)).toBe('Buzz');
})
test('if the number is divisible by 3 & 5 it returns the FizzBuzz', ()=> {
  expect(fizzBuzz(15)).toBe('FizzBuzz');
})