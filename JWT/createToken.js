const jwt = require("jsonwebtoken");

module.exports.createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 24 * 60 * 60,
  });
};
