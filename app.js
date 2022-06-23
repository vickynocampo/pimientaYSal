const express = require('express');
const path = require('path');
const menuRoutes = require("./routes/menuRoutes")
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/", menuRoutes);

module.exports = app;