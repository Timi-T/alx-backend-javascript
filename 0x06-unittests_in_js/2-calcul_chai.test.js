// Test a function using mocha

const calculateNumber = require('./2-calcul_chai');
const assert = require('assert');
const { describe } = require('mocha');
const  expect = require('chai').expect;

describe('calculateNumber', function SumNum() {
  context('With sum type', function test1() {
    it('Adds two numbers', function testSum() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    })
  })

  context('With subtract type', function test2() {
    it('Subtracts two numbers', function testSubtract() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    })
  })

  context('With divide type', function test3() {
    it('Divides one number by another', function testDivide() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    })
  })

  context('With divide type and zero denumenator', function test4() {
    it('Divides one number by another', function testDivideZero() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    })
  })
});
