// Task 1
interface Teacher extends Record<string, any> {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
}

// Task 2
interface Directors extends Teacher {
  numberOfReports: number
}

// Task 3
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`;

// Task 4
interface studentInterface {
  firstName: string,
  lastName: string,
  workOnHomework(): string,
  displayName(): string
}

class StudentClass implements studentInterface {
  firstName: string;
  lastName: string;
 
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return ('Currently working');
  }

  displayName() {
    return (this.firstName);
  }
}
