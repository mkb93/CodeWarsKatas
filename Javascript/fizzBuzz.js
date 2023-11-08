// when i enter a number if it is divisible by 3 it return Fizz
// else if if it is divisible by 5 it returns Buzz
// else if it is divisible by both it returns FizzBuzz
//else it returns the numbers

const fizzBuzz = (y) => {
  let res = y
    if (y%3 === 0){
      res = 'Fizz'
    } 
    if (y%5 === 0){
      res = 'Buzz'
    } 
    if ((y%3 === 0) && (y%5 === 0) ) {
      res = 'FizzBuzz'
    }
      return res ;
} 

module.exports = fizzBuzz;