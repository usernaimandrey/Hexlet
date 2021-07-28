const fizzBuzz = (begin, end) => {
  if (begin > end) {
    return null;
  }
  if (begin % 3 === 0 && begin % 5 === 0) {
    console.log('FizzBuzz');
    return fizzBuzz(begin + 1, end);
  }
  if (begin % 3 === 0) {
    console.log('Fizz');
    return fizzBuzz(begin + 1, end);
  }
  if (begin % 5 === 0) {
    console.log('Buzz');
    return fizzBuzz(begin + 1, end);
  }
  console.log(begin);
  return fizzBuzz(begin + 1, end);
};

export default fizzBuzz;
