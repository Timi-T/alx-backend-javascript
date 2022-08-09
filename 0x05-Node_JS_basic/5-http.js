// Node server with a valid response

const http = require('http');

let path = process.argv[2];
if (!path) {
  path = 'none';
}

const app = http.createServer((request, response) => {

  function countStudents (path) {
    const fs = require('fs');
  
    const makePromise = () => {
      return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (error, data) => {
          if (error) {
            reject(new Error('Cannot load the database'));
          } else {
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
            return resolve(allLines);
          }
        });
      });
    };
    return makePromise();
  }
  

  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  } else if (request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(path)
      .then((res) => {
        response.write(res);
        response.end();
      })
      .catch((err) => {
        response.write(err.message)
        response.end();
      });
  }
});

app.listen(1245);

module.exports = app;
