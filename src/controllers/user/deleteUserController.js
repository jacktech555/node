const userService = require('../../services/user');

const deleteUser = (req, res) => {
  userService
    .deleteUserService(req.params.id)
    .then((email) => {
      res.status(200).json(email).send();
    })
    .catch((e) => {
      res.status(e.statusCode).send(e.errorDetails);
    });
};

module.exports = deleteUser;
