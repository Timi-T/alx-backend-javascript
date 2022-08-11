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

  const options = {
    url: 'http://localhost:7865/login',
    json: true,
    body: {
        userName: 'opeyemi',
    }
  };

  it('Test api for login response status code', function testLoginststatus() {
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
    })
  });

  it('Test api for login response', function testLogin() {
    request.post(options, (err, res, body) => {
      expect(body).to.be.equal('Welcome opeyemi');
    })
  });

  it('Test for available_payments status code', function testLoginststatus() {
    request.get('http://localhost:7865/available_payments', (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
    })
  });

  it('Test for available_payments message', function testLoginststatus() {
    request.get('http://localhost:7865/available_payments', (err, res, body) => {
      expect(JSON.parse(body)).to.deep.equal({"payment_methods":{"credit_cards":true,"paypal":false}});
    })
  });
});