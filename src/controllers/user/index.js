const express = require('express');
const createUser = require('./createUserController');
const signinUser = require('./signinController');
const deleteUser = require('./deleteUserController');
const getUser = require('./getUserController');
const getUsers = require('./getUsersController');
const updateUser = require('./updateUserController');

const router = express.Router();

router.post('/signin', signinUser);
router.post('/', createUser);
router.get('/users', getUsers);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
router.get('/:id', getUser);

module.exports = router;
