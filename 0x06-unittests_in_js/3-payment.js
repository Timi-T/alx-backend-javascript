// Function to send a payment request to an API

const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const cost = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${cost}`);
}

module.exports = sendPaymentRequestToApi;
