// Test a function using cinon spy

const Utils = require('./utils');
const assert = require('assert');
const expect = require('chai').expect;
const { describe } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');

describe('endPaymentRequestToApi', function spyTest() {
  context('Test That the Utils.calculateNumber function is stubed', function test1() {
    it('Sends a payment request and returns a stubbed value', function testSpy() {
      const stub = sinon.stub(Utils, 'calculateNumber');
      stub.withArgs('SUM', 100, 20).returns(10);
      sendPaymentRequestToApi(100, 20);
      expect(Utils.calculateNumber('SUM', 100, 20)).to.be.equal(10);
    })
  });

  context('Test that the correct message is logged on the console', function test1() {
    it('Sends a payment request and prints the correct message', function testSpy() {
      const spy = sinon.spy(console, 'log');
      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledOnceWithExactly(spy, 'The total is: 10');
    })
  });
});