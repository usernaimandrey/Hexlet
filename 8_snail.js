//Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход матрицу и возвращает список элементов матрицы по порядку следования от левого верхнего элемента по часовой стрелке к внутреннему. 
//Движение по матрице напоминает улитку


import _ from 'lodash';

const matrix5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
  ];

const rotate = (matrix) => _.reverse(_.zip(...matrix));// Поворачивает матрицу на лево

const buildSnailPath = (matrix) => {
    if (matrix.length === 0) {
      return [];
    }
    const [head, ...tail] = matrix;
    return [head, buildSnailPath(rotate(tail))].flat();
  };


