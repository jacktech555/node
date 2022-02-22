const User = require('../../models/User');
const userService = require('../../services/user');
const jwt = require('jsonwebtoken');
const config = require('config');

const createUser = async (req, res) => {
  userService
    .createUserService(req.body)
    .then((token) => {
      res.status(201).json(token);
      res.send();
    })
    .catch((e) => {
      res.status(e.statusCode).send(e.errorDetails);
    });
};

module.exports = createUser;
