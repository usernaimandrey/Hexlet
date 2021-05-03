/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
/* eslint-disable no-continue */

const operation = ['*', '/', '+', '-'];

const operationSearch = (element) => operation[operation.indexOf(element)];

const operPerforming = (a, b, oper) => {
  let result = 0;
  switch (oper) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      result = a / b;
      break;
  }
  return result;
};

const calcInPolishNotation = (coll) => {
  const stack = [];
  let operandA = 0;
  let operandB = 0;
  let operCurrent = '';
  for (const value of coll) {
    if (typeof value === 'number') {
      stack.push(value);
    }
    if (operation.includes(value)) {
      operCurrent = operationSearch(value);
      operandB = stack.pop();
      operandA = stack.pop();
      stack.push(operPerforming(operandA, operandB, operCurrent));
    }
  }
  return stack[0];
};

export default calcInPolishNotation;
