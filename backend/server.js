const express = require('express');
// const mongoose = require('mongoose');
const bodyPareser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const apiList = require('./API/index.js');
// const phoneFunctions = require('./API/phone/index.js');

const app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   // res.header("Access-Control-Allow-Methods", "GET, POST, PUT, MERGE, *");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(cors());
app.use(bodyPareser.json());
// app.use('/cms', cmsFunctions);
app.use('/', apiList);

const port = 5000;

let source = "" // later this should be changed to localhost to prevent external direct incoming connections to the server

app.listen(port, source, function() {
  console.log("... port %d in %s mode", port, app.settings.env);
});

// mongoose.connect(process.env.DB_CONNECTION_REMOTE, (err) => {
//     if (err) throw err;
//     else console.log('The connection to the database was established');
// });

