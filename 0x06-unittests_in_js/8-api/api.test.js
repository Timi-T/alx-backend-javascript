// Test a simple express api

const { expect } = require('chai');
const request = require('request');
const sinon = require('sinon');

describe('Test api', function testApi() {
  beforeEach(() => {
    sinon.restore();
  });
  it('Test api for correct status code', function testcode() {
    res = request.get('http://localhost:7865/', (err, res, data) => {
      expect(res.statusCode).to.be.equal(200);
    });
  })

  it('Test api for correct data', function testcode() {
    res = request.get('http://localhost:7865/', (err, res, data) => {
      expect(data).to.be.equal('Welcome to the payment system');
    });
  })
})