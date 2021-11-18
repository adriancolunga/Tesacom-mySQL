const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "tesacom",
  multipleStatements: true,
});

const dbInfo = `
CREATE DATABASE IF NOT EXISTS tesacom;

USE tesacom;

CREATE TABLE IF NOT EXISTS users (
  email varchar(45) NOT NULL,
  password varchar(45) NOT NULL,
  name varchar(45) NOT NULL,
  lastname varchar(45) NOT NULL,
  created datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (email)
);

CREATE TABLE IF NOT EXISTS devices (
  serial varchar(45) NOT NULL,
  alias varchar(45) NOT NULL,
  model varchar(45) NOT NULL,
  code int NOT NULL,
  created datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (serial)
);

CREATE TABLE IF NOT EXISTS apps (
  id int NOT NULL,
  name varchar(45) NOT NULL,
  url varchar(45) NOT NULL,
  icon varchar(45) NOT NULL,
  created datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
)
`;

db.connect((err) => {
  if (err) console.log(err);
  db.query(dbInfo, (err, r) => {
    if (err) console.log(err);
    console.log("DB created");
  });
});

module.exports = db;
