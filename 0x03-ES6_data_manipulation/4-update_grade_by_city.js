export default function updateStudentGradeByCity(studentArray, city, newGrades) {
  const newArray = studentArray.filter((student) => student.location === city);
  const updateArray = newArray.map((student) => {
    const gradeObj = newGrades.find((obj) => obj.studentId === student.id);
    /* eslint-disable no-param-reassign */
    if (gradeObj) {
      student.grade = gradeObj.grade;
    } else {
      student.grade = 'N/A';
    }
    /* eslint-enable no-param-reassign */
    return student;
  });
  return (updateArray);
}
