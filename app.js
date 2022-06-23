const express = require('express');
const path = require('path');
const menuRoutes = require("./routes/menuRoutes")
const detailRoutes = require("./routes/detailRoutes")
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/", menuRoutes);
app.use("/detalleMenu", detailRoutes)

module.exports = app;