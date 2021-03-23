/*
 * Реализуйте и экспортируйте по умолчанию функцию, которая принимает две матрицы и возвращает новую матрицу — результат их произведения.
 */


 function multiply(arr1, arr2) {
  const result = [];
  let temp = [];
  let sumElement = 0;
  let i = 0;
  let j = 0;
  let k = 0;
  let v = 0;
  while (i < arr1.length && v < arr2[k].length) {
    sumElement += arr1[i][j] * arr2[k][v];
    j += 1;
    k += 1;
    if (j >= arr1[i].length || k >= arr2.length) {
      temp.push(sumElement);
      sumElement = 0;
      v += 1;
      j = 0;
      k = 0;
      if (temp.length === arr1.length || temp.length === arr2[k].length) {
        result.push(temp);
        temp = [];
        i += 1;
        v = 0;
      }
    }
  }
  return result;
}


const matrixC = [
  [2, 5],
  [6, 7],
  [1, 8],
];
const matrixD = [
  [1, 2, 1],
  [0, 1, 0],
];

console.log(multiply(matrixC, matrixD));