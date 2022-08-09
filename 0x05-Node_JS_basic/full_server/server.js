// Create app server and link it to routes

const express = require("express");
const app = express();
const nodeRoutes = require("./routes/index");

nodeRoutes(app);
app.listen(1245);

export default app;
