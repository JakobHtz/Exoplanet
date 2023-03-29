CREATE DATABASE IF NOT EXISTS exodb;
USE exodb;
CREATE TABLE IF NOT EXISTS Planet(
  PID INT AUTO_INCREMENT,
  planet_name VARCHAR(20),
  x_size INT,
  y_size INT,
  PRIMARY KEY(PID)
);
CREATE TABLE IF NOT EXISTS Robot(
  RID INT AUTO_INCREMENT,
  PID INT,
  thread_id INT,
  x_pos INT,
  y_pos INT,
  dir ENUM(
    'NORTH',
    'SOUTH',
    'WEST',
    'EAST'
  ),
  PRIMARY KEY(RID),
  FOREIGN KEY(PID) REFERENCES Planet(PID)
);
CREATE TABLE IF NOT EXISTS PlanetData(
  DID INT AUTO_INCREMENT,
  RID INT,
  PID INT,
  scan_timestamp DATETIME,
  temp DOUBLE,
  ground ENUM(
    'NICHTS',
    'SAND',
    'GEROELL',
    'FELS',
    'WASSER',
    'PFLANZEN',
    'MORAST',
    'LAVA'
  ),
  x_pos INT,
  y_pos INT,
  PRIMARY KEY(DID),
  FOREIGN KEY(RID) REFERENCES Robot(RID),
  FOREIGN KEY(PID) REFERENCES Planet(PID)
);
