// Link routes to controllers

const AppController = require("../controllers/AppController");
const StudentsController = require("../controllers/StudentsController");
const express = require('express');
const router = express.Router()

router.get('/', (request, response) => {
  AppController.getHomepage(request, response);
});

router.get('/students', (request, response) => {
    StudentsController.getAllStudents(request, response);
});

router.get('/students/:major', (request, response) => {
    StudentsController.getAllStudentsByMajor(request, response);
});

module.exports = router;
