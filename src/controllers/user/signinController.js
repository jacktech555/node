const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const userService = require('../../services/user');
const config = require('config');

const signinUser = async (req, res, next) => {
  userService
    .signinService(req.body)
    .then((result) => {
      res.status(201).json(result);
      res.send();
    })
    .catch((e) => {
      res.send(e);
    });
};

module.exports = signinUser;
