import Square from './Square.js';

class SquaresGenerator {
  static generate(side, count = 5) {
    const iter = (acc, counter) => {
      if (counter === 0) {
        return acc;
      }
      return iter([...acc, new Square(side)], counter - 1);
    };
    return iter([], count);
  }
}

export default SquaresGenerator;
