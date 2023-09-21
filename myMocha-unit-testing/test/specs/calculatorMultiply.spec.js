const Calculator = require('../../app/calculator');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('calculatorMultiply', function () {
  let calculator, spy;

  beforeEach(() => {
    calculator = new Calculator();
    spy = chai.spy.on(calculator, 'calculatorMultiply');
  });

  afterEach(() => {
    calculator = null;
  });

  it('should return 6 when called with number 2 and 3', function () {
    expect(calculator.multiply(2, 3)).to.be.equal(6);
  });

  it('should return -40 when called with numbers -2, 4, 5', function () {
    expect(calculator.multiply(-2, 4, 5)).to.be.equal(-40);
  });

  it('should return 0 when called with numbers is 0 and 3', function () {
    expect(calculator.multiply(0, 3)).to.be.equal(0);
  });

  it('should return 42 when called with number 42', function () {
    expect(calculator.multiply(42)).to.be.equal(42);
  });

  it('should return 0 when called with numbers 42 and 0', function () {
    expect(calculator.multiply(42, 0)).to.be.equal(0);
  })
});
