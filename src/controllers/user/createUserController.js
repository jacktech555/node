const User = require('../../models/User');
const userService = require('../../services/user');
const jwt = require('jsonwebtoken');
const config = require('config');

const createUser = async (req, res, next) => {
  userService
    .createUserService(req.body)
    .then((token) => {
      res.status(201).json(token);
      res.send();
    })
    .catch((e) => {
      res.send(e);
    });
};

module.exports = createUser;
