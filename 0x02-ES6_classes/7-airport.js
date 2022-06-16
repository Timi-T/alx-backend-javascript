const util = require('util');

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  [util.inspect.custom]() {
    return (`${this.constructor.name} [${this._code}] ${JSON.stringify(this)}`);
  }
}
