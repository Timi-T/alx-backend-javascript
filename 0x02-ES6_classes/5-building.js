export default class Building {
  constructor(sqft) {
    const name = 'evacuationWarningMessage';
    if (Object.prototype.hasOwnProperty.call(this, name) || this.constructor.name === 'Building') {
      this._sqft = sqft;
    } else {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
