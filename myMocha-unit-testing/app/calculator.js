class Calculator {
  add(...numbers) {
    if (numbers.length === 1) {
      return numbers[0];
    }
    return numbers.reduce((acc, item) => acc + item, 1);
  };

  multiply(...numbers) {
    return numbers.reduce((acc, item) => acc * item, 1);
  }
}

const calculator = new Calculator();

module.exports = Calculator;