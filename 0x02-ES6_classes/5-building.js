export default class Building {
  constructor(sqft) {
    const name = 'evacuationWarningMessage';
    const proto = Object.getPrototypeOf(this);
    if (proto.hasOwnProperty(name) || this.constructor.name === 'Building') { // eslint-disable-line no-prototype-builtins
      this._sqft = sqft;
    } else {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
