// Test a function using mocha

const calculateNumber = require('./1-calcul');
const assert = require('assert');
const { describe } = require('mocha');

describe('calculateNumber', function SumNum() {
  context('With sum type', function test1() {
    it('Adds two numbers', function testSum() {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    })
  })

  context('With subtract type', function test2() {
    it('Subtracts two numbers', function testSubtract() {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    })
  })

  context('With divide type', function test3() {
    it('Divides one number by another', function testDivide() {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    })
  })

  context('With divide type and zero denumenator', function test4() {
    it('Divides one number by another', function testDivideZero() {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    })
  })
});
