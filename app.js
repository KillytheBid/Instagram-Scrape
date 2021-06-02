const express = require('express');
const app = express();

const indexRouter = require('./routes/indexRouter.js');

app.use(indexRouter);

module.exports = app;
