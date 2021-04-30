/* Реализуйте и экспортируйте функции rotateLeft() и rotateRight(),
которые поворачивают матрицу влево (против часовой стрелки)
и соответственно вправо (по часовой стрелке).

    Матрица реализована на массивах.
    Функции должны возвращать новую матрицу не изменяя исходную.
*/

const rotateRight = (coll) => {
  const len = coll[0].length;
  const result = [];
  let arr = [];
  let indexStr = 0;
  let indexColum = coll.length - 1;
  while (indexStr < len) {
    arr.push(coll[indexColum][indexStr]);
    indexColum -= 1;
    if (indexColum < 0) {
      indexStr += 1;
      indexColum = coll.length - 1;
      result.push(arr);
      arr = [];
    }
  }
  return result;
};

const rotateLeft = (coll) => {
  const result = [];
  let arr = [];
  let indexStr = coll[0].length - 1;
  let indexColum = 0;
  while (indexStr >= 0) {
    arr.push(coll[indexColum][indexStr]);
    indexColum += 1;
    if (indexColum >= coll.length) {
      indexStr -= 1;
      indexColum = 0;
      result.push(arr);
      arr = [];
    }
  }
  return result;
};

export { rotateLeft, rotateRight };
