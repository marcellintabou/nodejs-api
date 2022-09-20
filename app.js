const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json);

const connectDB = require('./config/db');

//Load configuration
dotenv.config({path: './config/config.env'});

//Connect to DB
connectDB();

//routes
app.use('/', require('./routes/index'));

app.listen(3000);