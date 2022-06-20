export default function getListStudentIds(array) {
  if (typeof array !== 'object' || array instanceof Array === false) {
    return [];
  }
  const idArray = array.map((student) => student.id);
  return idArray;
}
