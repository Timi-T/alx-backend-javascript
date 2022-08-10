// Test a function using cinon spy

const Utils = require('./utils');
const assert = require('assert');
const expect = require('chai').expect;
const { describe } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');

describe('endPaymentRequestToApi', function spyTest() {
  context('Test That payment uses the Utils.calculateNumber function', function test1() {
    it('Sends a payment request', function testSpy() {
      const spy = sinon.spy(Utils, 'calculateNumber');
      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledOnce(spy);
    })
  });
});