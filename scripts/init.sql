CREATE DATABASE IF NOT EXISTS exodb;
USE exodb;
CREATE TABLE IF NOT EXISTS Robot(
  RID INT AUTO_INCREMENT,
  x_pos INT,
  y_pos INT,
  dir VARCHAR(10),
  PRIMARY KEY(RID)
);
CREATE TABLE IF NOT EXISTS PlanetData(
  DID INT AUTO_INCREMENT,
  RID INT,
  planet VARCHAR(20),
  timestamp DATETIME,
  temp DOUBLE,
  ground VARCHAR(10),
  x_pos INT,
  y_pos INT,
  PRIMARY KEY(DID),
  FOREIGN KEY(RID) REFERENCES Robot(RID)
);
