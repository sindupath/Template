const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require('express-session');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const path = require('path');

dotenv.config({
    path:"./.env"
});

const PORT = process.env.PORT || 2000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("connection success");
  }
});

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
var corsOptions ={
  "origin": "http://localhost:3000",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}
const location = path.join(__dirname,"./public");
app.use(express.static(location));

app.use(session({
    secret:process.env.JWT_SECRET,
    resave: true,
    saveUninitialized: true,
}));

app.use(cors(corsOptions));



app.use('/',require("./routes/common"));

app.listen(PORT, () => {
  console.log("server start " + PORT);
});
