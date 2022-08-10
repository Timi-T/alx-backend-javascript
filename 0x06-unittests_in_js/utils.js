// Create a js module

const Utils = module;
Utils.calculateNumber = function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }
  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }
  if (type === 'DIVIDE') {
    const denom = Math.round(b);
    if (denom === 0) {
      return 'Error';
    }
    return Math.round(a) / denom;
  }
  return false;
}

module.exports = Utils;
