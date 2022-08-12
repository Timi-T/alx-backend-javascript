// App controller class

class AppController {
  static getHomepage(request, response) {
    response.statusCode = 200;
    return response.send('Hello Holberton School!');
  }
}

module.exports = AppController;
