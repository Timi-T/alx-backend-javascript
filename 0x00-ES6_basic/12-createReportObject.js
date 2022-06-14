export default function createReportObject(employeesList) {
  let obj = {
    ["allEmployees"]: employeesList,
    getNumberOfDepartments () {
      return (Object.keys(employeesList).length)
    },
  };
  return obj
}
