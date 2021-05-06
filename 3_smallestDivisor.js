/*
Реализуйте тело функции smallestDivisor, используя итеративный процесс.
Эта функция должна находить наименьший делитель заданного числа.

Доп. условия: число, передаваемое в функцию, больше нуля;
делитель должен быть больше единицы, за исключением случая,
когда аргументом является единица (наименьшим делителем которой является также единица).

Например, наименьший делитель числа 15 это 3.
*/

const smallestDivisor = (num) => {
  const iter = (x, y) => {
    if (x === 1) {
      return 1;
    }
    if (x % y === 0) {
      return y;
    }
    return iter(x, y + 1);
  };
  return iter(num, 2);
};

export default smallestDivisor;
