const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const {
  ConflictException,
  UnprocessableEntity,
} = require('../../utilities/exceptions');
const { use } = require('../../controllers/user');

const createUser = async (data) => {
  const { email, password, salary } = data;
  if (!email || !password)
    throw new UnprocessableEntity('Must Provide Email And Password');
  try {
    const user = new User(data);
    user.createdAt = user.updatedAt = new Date();
    await user.save();
    const token = jwt.sign({ userId: user._id }, config.get('tokenSecret'));
    return {
      token,
      data: {
        id: user._id,
        email: user.email,
        salary: user.salary,
      },
    };
  } catch (err) {
    throw new ConflictException(
      'Account already exists! Try with another email id'
    );
  }
};

module.exports = createUser;
