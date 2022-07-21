//js

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

//Routes
app.use('/', require('./routes/login'));

const PORT = process.env.PORT || 2323;

app.listen(PORT, console.log("Server has started at port " + PORT));

