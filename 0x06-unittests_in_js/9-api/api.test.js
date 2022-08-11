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
  });

  it('Test api for correct data', function testcode() {
    res = request.get('http://localhost:7865/', (err, res, data) => {
      expect(data).to.be.equal('Welcome to the payment system');
    });
  });

  it('Test api url parameter with integer', function testApiint1() {
    res = request.get('http://localhost:7865/cart/45', (err, res, data) => {
      expect(data).to.be.equal(`Payment methods for cart ${45}`);
    });
  });

  it('Test api url parameter with integer', function testApiint2() {
    res = request.get('http://localhost:7865/cart/45', (err, res, data) => {
      expect(res.statusCode).to.be.equal(200);
    });
  });

  it('Test api url parameter with decimal', function testApidec() {
    res = request.get('http://localhost:7865/cart/45.4', (err, res, data) => {
      expect(res.statusCode).to.be.equal(404);
    });
  });

  it('Test api url parameter with string', function testApistr() {
    res = request.get('http://localhost:7865/cart/ope', (err, res, data) => {
      expect(res.statusCode).to.be.equal(404);
    });
  });
});