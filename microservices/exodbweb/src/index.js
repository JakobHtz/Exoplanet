const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');

const database = 'exodb';

const addr = process.env.MARIADB_ADDR;
const hostaddr = typeof addr == "undefined"||addr==""?'localhost':addr;

const connection = mysql.createConnection({
  host     : hostaddr,
  user     : 'root',
  password : 'test'
});

console.log("Connecting to " + hostaddr);
connection.connect();

connection.query("CREATE DATABASE IF NOT EXISTS " + database + ";");
console.log("Database created or exists.");

connection.query('USE ' + database + ";");
console.log("Database used: " + database);

connection.query("CREATE TABLE IF NOT EXISTS Robot(RID INT AUTO_INCREMENT,x_pos INT,y_pos INT,dir VARCHAR(10),PRIMARY KEY(RID));");
connection.query("CREATE TABLE IF NOT EXISTS PlanetData(DID INT AUTO_INCREMENT,RID INT,planet VARCHAR(20),timestamp DATETIME,temp DOUBLE,ground VARCHAR(10),x_pos INT,y_pos INT,PRIMARY KEY(DID),FOREIGN KEY(RID) REFERENCES Robot(RID));");
console.log("Tables created or exist.");

const port = process.env.PORT || 8081;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
