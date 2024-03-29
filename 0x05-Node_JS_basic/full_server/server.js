// Create app server and link it to routes

const express = require('express');

const app = express();

const router = require('./routes/index');

app.use(router);
app.listen(1245);

export default app;
