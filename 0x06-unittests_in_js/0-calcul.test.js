// Test a function using mocha

const calculateNumber = require('./0-calcul');
const assert = require('assert');


describe('calculateNumber', () => {
  it('adds the round of two numbers test1', function testSum() {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('adds the round of two numbers test2', function testSum2() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('adds the round of two numbers test3', function testSum3() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('adds the round of two numbers test4', function testSum4() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });

  it('adds the round of two numbers test5', function testSum5() {
    assert.strictEqual(calculateNumber(1.5, 1.5), 4);
  });

  it('adds the round of two numbers test6', function testSum6() {
    assert.strictEqual(calculateNumber(345.1, 1.9), 347);
  });

  it('adds the round of two numbers test7', function testSum7() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('adds the round of two numbers test8', function testSum8() {
    assert.strictEqual(calculateNumber(-34.6, 2.4), -33);
  });

  it('adds the round of two numbers test9', function testSum9() {
    assert.strictEqual(calculateNumber(-34.6, -2.9), -38);
  });

  it('adds the round of two numbers test10', function testSum10() {
    assert.strictEqual(calculateNumber(34.6, -2.8), 32);
  });
});
