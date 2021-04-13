/*
Реализуйте и экспортируйте функцию calcShipsCount(),
которая принимает на вход поле боя в виде квадратного двумерного массива из нулей и единиц.
Ноль — пустая ячейка, единица — часть корабля.
Функция должна вернуть количество кораблей на поле боя.
Так как корабли не должны соприкасаться друг с другом,
реализуйте и экспортируйте функцию isValidField(),
которая проверяет расстановку кораблей на корректность.
*/

export const calcShipsCount = (matrix) => {
  let row = 0;
  let column = 0;
  let count = 0;
  while (column < matrix.length) {
    while (row < matrix.length) {
      if (matrix[column][row]) {
        count += 1;
        if (column !== matrix.length - 1 && matrix[column + 1][row]) {
          count -= 1;
        }
        if (matrix[column][row + 1]) {
          row += 1;
          if (matrix[column][row + 1]) {
            row += 1;
          }
        }
      }
      if (
        column !== 0
        && matrix[column][row] === true
        && matrix[column - 1][row] === true
      ) {
        count += 1;
        row += 1;
      }
      if (matrix[column][row] === true && matrix[column - 1][row] === true) {
        row += 1;
      }
      row += 1;
    }
    row = 0;
    column += 1;
  }
  return count;
};

export const isValidField = (matrix) => {
  let result = true;
  let row = 1;
  let column = 0;
  while (column < matrix.length) {
    while (row < matrix.length - 1) {
      if (matrix[column][row]) {
        if (
          typeof matrix[column - 1] !== 'undefined'
          && typeof matrix[column + 1] !== 'undefined'
        ) {
          if (
            matrix[column - 1][row - 1]
            || matrix[column - 1][row + 1]
            || matrix[column + 1][row - 1]
            || matrix[column + 1][row + 1]
          ) {
            result = false;
          }
        }
        if (typeof matrix[column - 1] !== 'undefined') {
          if (matrix[column - 1][row - 1] || matrix[column - 1][row + 1]) {
            result = false;
          }
        }
        if (typeof matrix[column + 1] !== 'undefined') {
          if (matrix[column + 1][row - 1] || matrix[column + 1][row + 1]) {
            result = false;
          }
        }
      }
      row += 1;
    }
    row = 1;
    column += 1;
  }
  return result;
};
