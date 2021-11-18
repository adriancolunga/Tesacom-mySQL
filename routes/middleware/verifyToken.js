const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (!authHeader) res.status(401).json("UNAUTHORIZED (header)");
  else {
    jwt.verify(authHeader, "sec", (err, user) => {
      if (err) res.status(403).json("INVALID TOKEN");
      else next();
    });
  }
};

module.exports = verifyToken;
