const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const userService = require('../../services/user');
const config = require('config');

const signinUser = async (req, res, next) => {
  userService
    .signinService(req.body)
    .then((token) => {
      res.status(201).json(token);
      res.send();
    })
    .catch((e) => {
      res.send(e);
    });
};

module.exports = signinUser;
