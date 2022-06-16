export default class HolbertonCourse {
  constructor(name, length, students) {
    /* eslint-disable no-unused-expressions */
    HolbertonCourse.checkName(name) ? this._name = name : HolbertonCourse.throwTypeError('Name must be a string');
    HolbertonCourse.checkLength(length) ? this._length = length : HolbertonCourse.throwTypeError('Length must be a number');
    HolbertonCourse.checkStudents(students) ? this._students = students : HolbertonCourse.throwTypeError('Students must be an array of strings');
    /* eslint-enable no-unused-expressions */
  }

  static throwTypeError(err) {
    if (err) {
      throw new TypeError(err);
    }
  }

  static checkName(name) {
    if (typeof name === 'string' || name instanceof String) {
      return true;
    }
    return false;
  }

  static checkLength(length) {
    if (typeof length === 'number' || length instanceof Number) {
      return true;
    }
    return false;
  }

  static checkStudents(students) {
    if (Array.isArray(students) || students instanceof Array) {
      for (const student of students) {
        if (typeof student !== 'string' && student instanceof String === false) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    HolbertonCourse.checkName(name) ? this._name = name : HolbertonCourse.throwTypeError('Name must be a string'); // eslint-disable-line no-unused-expressions
  }

  set length(length) {
    HolbertonCourse.checkLength(length) ? this._length = length : HolbertonCourse.throwTypeError('Length must be a number'); // eslint-disable-line no-unused-expressions
  }

  set students(students) {
    HolbertonCourse.checkStudents(students) ? this._students = students : HolbertonCourse.throwTypeError('Students must be an array of strings'); // eslint-disable-line no-unused-expressions
  }
}
