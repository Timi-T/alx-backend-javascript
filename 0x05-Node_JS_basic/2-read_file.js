// Parse a csv file synchronously to extract relevant data

const fs = require('fs');

function countStudents(path) {
  let data = '';
  try {
    data = fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  let dataArray = data.split('\n');
  dataArray = dataArray.filter((str) => str !== '');

  const newArray = [];
  const fieldCount = {};
  const fieldNames = {};

  for (let i = 0; i < dataArray.length; i += 1) {
    dataArray[i] = dataArray[i].split(',');
    if (i !== 0) {
      const obj = {};
      for (let j = 0; j < dataArray[0].length; j += 1) {
        obj[dataArray[0][j]] = dataArray[i][j];
      }
      const { field } = obj;
      let count = 0;
      if (fieldCount[field]) {
        count = fieldCount[field];
      }
      fieldCount[field] = count + 1;
      if (!fieldNames[field]) {
        fieldNames[field] = [];
      }
      const names = fieldNames[field];
      names.push(obj.firstname);
      fieldNames[field] = names;
      newArray.push(obj);
    }
  }

  console.log(`Number of students: ${newArray.length}`);
  Object.keys(fieldCount).forEach((field) => {
    console.log(`Number of students in ${field}: ${fieldCount[field]}. List:${fieldNames[field].map((firstname) => ` ${firstname}`)
    }`);
  });
}

module.exports = countStudents;
