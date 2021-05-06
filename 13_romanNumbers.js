const map = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const toRoman = (num) => {
  const keys = Object.keys(map);
  let result = '';
  let number = num;
  for (let i = 0; i < keys.length; i += 1) {
    if (number >= map[keys[i]]) {
      result = `${result}${keys[i]}`;
      number -= map[keys[i]];
      i -= 1;
    }
  }
  return result;
};

const toArabic = (str) => {
  const arab = Object.values(map);
  const roman = Object.keys(map);
  const arabRev = arab.reverse();
  const romanRev = roman.reverse();
  let result = 0;
  let i = arab.length - 1;
  let pos = 0;
  while (i >= 0 && pos < str.length) {
    if (str.substr(pos, romanRev[i].length) === romanRev[i]) {
      result += arabRev[i];
      pos += romanRev[i].length;
    } else {
      i -= 1;
    }
  }
  if (toRoman(result) !== str) {
    return false;
  }
  return result;
};

export { toRoman, toArabic };
