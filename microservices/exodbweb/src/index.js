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

connection.query("CREATE TABLE IF NOT EXISTS Robot(RID INT AUTO_INCREMENT,x_pos INT,y_pos INT,dir ENUM('NORTH','SOUTH','WEST','EAST'),PRIMARY KEY(RID));");
connection.query("CREATE TABLE IF NOT EXISTS Planet(PID INT AUTO_INCREMENT,planet_name VARCHAR(20),x_size INT,y_size INT,PRIMARY KEY(PID));");
connection.query("CREATE TABLE IF NOT EXISTS PlanetData(DID INT AUTO_INCREMENT,RID INT,planet INT,scan_timestamp DATETIME,temp DOUBLE,ground ENUM('NICHTS','SAND','GEROELL','FELS','WASSER','PFLANZEN','MORAST','LAVA'),x_pos INT,y_pos INT,PRIMARY KEY(DID),FOREIGN KEY(RID) REFERENCES Robot(RID),FOREIGN KEY(PID) REFERENCES Planet(PID));");
console.log("Tables created or exist.");

const port = process.env.PORT || 8081;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
