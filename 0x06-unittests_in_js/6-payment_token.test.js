// Test a function that returns a promise

const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function testPromise() {
  context('Test that the promise is resolved', function test1(done) {
    it('Test for correct response', function testResolve(done) {
      getPaymentTokenFromAPI(true)
        .then((payload) => {
          expect(payload).to.deep.equal({data: 'Successful response from the API' })
          done();
        })
        .catch((err) => {
          expect(true).to.be.false;
        })
    });
  });
});