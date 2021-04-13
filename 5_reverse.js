// Реализуйте функцию reverse,
// которая переворачивает строку. Например:

// reverse('hello, world!'); // !dlrow ,olleh

const reverse = (str) => {
  const reversstr = '';
  const iter = (acc) => {
    if (acc === 0) {
      return reversstr;
    }
    return str[acc - 1] + iter(acc - 1);
  };
  return iter(str.length);
};
