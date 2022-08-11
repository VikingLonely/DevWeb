const express = require('express');
//instalar npm install body-parser
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json);
const router = express.Router();

//rotas
const index = require('./routes/index');
const apiRouter = require('./routes/apiRoute');
//const produtosRoute = require('./routes/produtosRoute');
app.use('/', index);
app.use('/rotas', apiRouter);
//app.use('/produtos', produtosRoute);
module.exports = app;