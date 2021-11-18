const db = require("../db");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { email, password } = req.body;
  db.query(
    "SELECT * FROM tesacom.users WHERE email = ?",
    [email],
    (err, result) => {
      if (err) console.log(err);
      else {
        const user = result[0];
        if (!user) return res.status(401).json("WRONG EMAIL OR PASSWORD");
        if (user.password !== password)
          res.status(403).json("WRONG EMAIL OR PASSWORD (pw)");
        else {
          const token = jwt.sign({ email, password }, "sec");
          res.status(200).json({ ...user, token });
        }
      }
    }
  );
};

module.exports = login;
