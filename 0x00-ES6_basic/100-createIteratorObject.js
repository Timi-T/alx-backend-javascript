export default function createIteratorObject(report) {
  const array = [];
  const obj = report.allEmployees;
  for (const key in obj) {
    if (obj[key]) {
      array.push(...obj[key]);
    }
  }
  return array;
}
