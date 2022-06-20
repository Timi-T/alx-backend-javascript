export default function getStudentsByLocation(array, city) {
  const filterArray = array.filter((student) => student.location === city);
  return filterArray;
}
