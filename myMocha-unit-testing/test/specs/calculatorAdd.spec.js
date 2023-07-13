const Calculator = require('../../app/calculator');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('calculatorAdd', function () {
  let calculator, spy;

  beforeEach(() => {
    calculator = new Calculator();
    spy = chai.spy.on(calculator, 'calculatorAdd');
  });

  afterEach(() => {
    calculator = null;
  });

  it('should return 6 when called with numbers 2 and 4', function () {
    expect(calculator.add(2, 4)).to.be.equal(6);
  });

  it('should return 4 when called with numbers 0, 4, 0', function () {
    expect(calculator.add(0, 4, 0)).to.be.equal(4);
  });

  it('should return 110 when called with numbers -30, 57, 83', function () {
    expect(calculator.add(-30, 57, 83)).to.be.equal(110);
  });

  it('should return 587 when called with number 587', function () {
    expect(calculator.add(587)).to.be.equal(587);
  });
});