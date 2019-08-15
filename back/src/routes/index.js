const express = require("express");
const Router = express.Router();

//ROUTER API'S
Router.use('/homeOffice', require('./homeOffice'))

module.exports = Router;