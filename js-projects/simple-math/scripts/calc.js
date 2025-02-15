const operators = ['+', '-', '*', '/'];

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '/':
      return Math.round(num1 / num2);
    default:
      return num1 * num2;
  }
};

export { operators, calc };
