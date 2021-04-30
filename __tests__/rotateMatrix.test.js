import { test, expect } from '@jest/globals';
import { rotateLeft, rotateRight } from '../7_rotateMatrix.js';

const expectLeft = [
  [4, 8, 2],
  [3, 7, 1],
  [2, 6, 0],
  [1, 5, 9],
];
const expectRight = [
  [9, 5, 1],
  [0, 6, 2],
  [1, 7, 3],
  [2, 8, 4],
];
const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
];

test('rotateLeft', () => {
  expect(rotateLeft(matrix)).toEqual(expectLeft);
});

test('rotateRight', () => {
  expect(rotateRight(matrix)).toEqual(expectRight);
});
