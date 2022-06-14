export default function createIteratorObject(report) {
  let array = [];
  for (const value in report.allEmployees) {
    array.push(...(report.allEmployees)[value])
  }
  return array
}


