const db = require("../db");

const allApps = (req, res) => {
  db.query("SELECT * FROM tesacom.apps", (err, result) => {
    if (err) console.log("ERROR: ", err);
    else res.status(200).json(result);
  });
};

const appById = (req, res) => {
  db.query(
    "SELECT * FROM tesacom.apps WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) console.log("ERROR: ", err);
      else res.status(200).json(result);
    }
  );
};

const newApp = (req, res) => {
  const { id, name, url, icon } = req.body;

  db.query(
    "INSERT INTO tesacom.apps (id, name, url, icon) VALUES (?,?,?,?)",
    [id, name, url, icon],
    (err, result) => {
      if (err) console.log("ERROR: ", err);
      else res.status(201).json("VALUES INSERTED");
    }
  );
};

const updateApp = (req, res) => {
  db.query(
    "UPDATE tesacom.apps SET ? WHERE id = ?",
    [req.body, req.params.id],
    (err, result) => {
      if (err) console.log("ERROR: ", err);
      else res.status(200).json("VALUES UPDATED");
    }
  );
};

const deleteApp = (req, res) => {
  db.query(
    "DELETE FROM tesacom.apps WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) console.log("ERROR: ", err);
      else res.status(200).json("DEVICE DELETED");
    }
  );
};

module.exports = { allApps, appById, newApp, updateApp, deleteApp };
