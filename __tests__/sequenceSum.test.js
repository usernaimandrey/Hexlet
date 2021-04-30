import { expect, test } from '@jest/globals';
import sequenceSum from '../2_sequenceSum.js';

test('sequenceSum', () => {
  expect(sequenceSum(1, 5)).toEqual(15);
  expect(sequenceSum(5, 1)).toEqual(NaN);
});
