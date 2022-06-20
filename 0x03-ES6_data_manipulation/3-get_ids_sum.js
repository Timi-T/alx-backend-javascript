export default function getStudentIdsSum(array) {
  const initialValue = 0;
  const sumAll = array.reduce((total, currStu) => total + currStu.id, initialValue);
  return sumAll;
}
