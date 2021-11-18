const db = require("../db");

const allDevices = (req, res) => {
  db.query("SELECT * FROM tesacom.devices", (err, result) => {
    if (err) console.log("ERROR: ", err);
    else res.status(200).json(result);
  });
};

const deviceBySerial = (req, res) => {
  db.query(
    "SELECT * FROM tesacom.devices WHERE serial = ?",
    [req.params.serial],
    (err, result) => {
      if (err) console.log("ERROR: ", err);
      else res.status(200).json(result);
    }
  );
};

const newDevice = (req, res) => {
  const { serial, alias, model, code } = req.body;
  db.query(
    "INSERT INTO tesacom.devices (serial, alias, model, code) VALUES (?,?,?,?)",
    [serial, alias, model, code],
    (err, result) => {
      if (err) console.log("ERROR: ", err);
      else res.status(201).json("VALUES INSERTED");
    }
  );
};

const updateDevide = (req, res) => {
  db.query(
    "UPDATE tesacom.devices SET ? WHERE serial = ?",
    [req.body, req.params.serial],
    (err, result) => {
      if (err) console.log("ERROR: ", err);
      else res.status(200).json("VALUES UPDATED");
    }
  );
};

const deleteDevice = (req, res) => {
  db.query(
    "DELETE FROM tesacom.devices WHERE serial = ?",
    [req.params.serial],
    (err, result) => {
      if (err) console.log("ERROR: ", err);
      else res.status(200).json("DEVICE DELETED");
    }
  );
};

module.exports = {
  allDevices,
  deviceBySerial,
  newDevice,
  updateDevide,
  deleteDevice,
};
