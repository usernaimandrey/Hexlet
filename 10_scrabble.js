/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

const countBychar = (word) => {
  const char = _.countBy(word.toLowerCase().split(''));
  return char;
};

export default (simbols, word) => {
  if (simbols.length < word.length) {
    return false;
  }
  const wordObj = countBychar(word);
  for (const simbol of simbols) {
    if (_.has(wordObj, simbol)) {
      wordObj[simbol] -= 1;
    }
  }
  return !_.max(Object.values(wordObj));
};
