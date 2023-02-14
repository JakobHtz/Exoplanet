const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');

const addr = process.env.MARIADB_ADDR;
const hostaddr = typeof addr == "undefined"||addr==""?'localhost':addr;

const connection = mysql.createConnection({
  host     : hostaddr,
  user     : 'root',
  password : 'test',
  database : 'exodb'
});

console.log("Connecting to " + hostaddr);
connection.connect();

const port = process.env.PORT || 8081;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
