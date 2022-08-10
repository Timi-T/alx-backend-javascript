// Test a function using mocha

const assert = require('assert');
const { describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('adds the round of two numbers', function () {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
