/*
Реализуйте (с использованием рекурсивного процесса) функцию sequenceSum,
которая находит сумму последовательности целых чисел.
Последовательность задается двумя значениями: begin - начало последовательности,
end - конец последовательности.
Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6.
Сумма такой последовательности будет: 20.
*/

const sequenceSum = (begin, end) => {
  if (begin > end) {
    return NaN;
  }
  if (end === begin) {
    return end;
  }
  return begin + sequenceSum(begin + 1, end);
};

export default sequenceSum;
