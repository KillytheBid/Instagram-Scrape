const express = require('express');
const app = express();

// routers
const indexRouter = require('./routes/indexRouter.js');

// view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// middlewaes
app.use(indexRouter);

module.exports = app;
