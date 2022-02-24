const userService = require('../../services/user');

const updateUser = (req, res) => {
  userService
    .updateUserService(req.params.id, req.body)
    .then((result) => {
      res.status(200).json(result).send();
    })
    .catch((e) => {
      res.status(e.statusCode).send(e.errorDetails);
    });
};

module.exports = updateUser;
