// Function to read a file asynchronously

const fs = require('fs');

function readDatabase(path) {
  function makePromise() {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf-8', (error, data) => {
        if (error) {
          return reject(new Error('Cannot load the database'));
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
        return resolve(fieldNames);
      });
    });
  }
  return makePromise();
}

module.exports = readDatabase;
