// Student controller class

const readDatabase = require('../utils');

let path = process.argv[2];
if (!path) {
  path = 'none';
}

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(path)
      .then((data) => {
        let message = 'This is the list of our students';
        Object.keys(data).sort().forEach((field) => {
          message += `\nNumber of students in ${field}: ${data[field].length}. List:${data[field].map((firstname) => ` ${firstname}`)}`;
        });
        return response.status(200).send(message);
      })
      .catch((err) => response.status(500).send(err));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE\n');
    }
    return readDatabase(path)
      .then((data) => {
        const message = `List:${data[major].map((firstname) => ` ${firstname}`)}`;
        return response.status(200).send(message);
      })
      .catch((err) => response.status(500).send(err));
  }
}

module.exports = StudentsController;
