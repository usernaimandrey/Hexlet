import { test, expect } from '@jest/globals';
import calcInPolishNotation from '../12_calcInPolishNotation.js';

test('polish notation', () => {
  expect(calcInPolishNotation([1, 2, '+', 4, '*', 3, '+'])).toBe(15);
  expect(calcInPolishNotation([1, 2, '+', 4, '*', 3, '/'])).toBe(4);
  expect(calcInPolishNotation([7, 2, 3, '*', '-'])).toBe(1);
  expect(calcInPolishNotation([1, 2, '+', 2, '*'])).toBe(6);
});
