// Read a file asynchronously

const fs = require('fs');
const fsp = fs.promises;

async function countStudents (path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  } else {
    let data = await fsp.readFile(path);
    data = data.toString();
    let dataArray = data.split('\n');
    dataArray = dataArray.filter((str) => {
      return str !== '';
    });

    const newArray = [];
    const fieldCount = {};
    const fieldNames = {};

    for (let i = 0; i < dataArray.length; i++) {
      dataArray[i] = dataArray[i].split(',');
      if (i !== 0) {
        const obj = {};
        for (let j = 0; j < dataArray[0].length; j++) {
          obj[dataArray[0][j]] = dataArray[i][j];
        }
        const field = obj.field;
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
    let allLines = `Number of students: ${newArray.length}`;
    Object.keys(fieldCount).forEach((field) => {
      allLines += `\nNumber of students in ${field}: ${fieldCount[field]}. List:${fieldNames[field].map((firstname) => {
        return ' ' + firstname;
      })}`;
    });
    console.log(allLines);
  }
}

module.exports = countStudents;
