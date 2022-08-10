// Test a function using cinon spy

const Utils = require('./utils');
const assert = require('assert');
const expect = require('chai').expect;
const { describe } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('endPaymentRequestToApi', function spyTest() {
  beforeEach(() => {
    sinon.restore();
  });
  afterEach(() => {
    sinon.restore();
  })
  context('Test that the correct message is logged on the console', function test1() {
    it('Sends a payment request and prints 120', function testSpy() {
      const spy = sinon.spy(console, 'log');
      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledOnceWithExactly(spy, 'The total is: 120');
      sinon.assert.calledOnce(spy);
    })
  });

  context('Test that the correct message is logged on the console', function test1() {
    it('Sends a payment request and prints 20', function testSpy() {
      const spy = sinon.spy(console, 'log');
      sendPaymentRequestToApi(10, 10);
      sinon.assert.calledOnceWithExactly(spy, 'The total is: 20');
      sinon.assert.calledOnce(spy);
    })
  });
});