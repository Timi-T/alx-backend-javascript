interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {firstName: 'Opeyemi', lastName: 'Ogunbode', age: 23, location: 'Lagos'};
const student2: Student = {firstName: 'Timilehin', lastName: 'Bode', age: 25, location:  'Canada'};

const studentList = [student1, student2];

for (const student of studentList) {
  console.log(`${student.firstName} ${student.location}`);
}
