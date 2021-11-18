const db = require("../db");

const allUsers = (req, res) => {
  db.query("SELECT * FROM tesacom.users", (err, result) => {
    if (err) console.log("ERROR: ", err);
    else res.status(200).json(result);
  });
};

const userByEmail = (req, res) => {
  db.query(
    "SELECT * FROM tesacom.users WHERE email = ?",
    [req.params.email],
    (err, result) => {
      if (err) console.log("ERROR: ", err);
      else res.status(200).json(result);
    }
  );
};

const newUser = (req, res) => {
  const { email, password, name, lastname } = req.body;
  db.query(
    "INSERT INTO tesacom.users (email, password, name, lastname) VALUES (?,?,?,?)",
    [email, password, name, lastname],
    (err, result) => {
      if (err) console.log("ERROR: ", err);
      else res.status(201).json("VALUES INSERTED");
    }
  );
};

const updateUser = (req, res) => {
  db.query(
    "UPDATE tesacom.users SET ? WHERE email = ?",
    [req.body, req.params.email],
    (err, result) => {
      if (err) console.log("ERROR: ", err);
      else res.status(200).json("VALUES UPDATED");
    }
  );
};

const deleteUser = (req, res) => {
  db.query(
    "DELETE FROM tesacom.users WHERE email = ?",
    [req.params.email],
    (err, result) => {
      if (err) console.log("ERROR: ", err);
      else res.status(200).json("USER DELETED");
    }
  );
};

module.exports = { allUsers, userByEmail, newUser, updateUser, deleteUser };
