// Test a function using mocha

const assert = require('assert');
const { describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('adds the round of two numbers', function testSum() {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('adds the round of two numbers', function testSum2() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('adds the round of two numbers', function testSum3() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('adds the round of two numbers', function testSum4() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
