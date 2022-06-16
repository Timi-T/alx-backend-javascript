export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const proto = Object.getPrototypeOf(this);
    const newObj = Object.create(proto);
    return new newObj.constructor();
  }
}
