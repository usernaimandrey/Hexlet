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

  
