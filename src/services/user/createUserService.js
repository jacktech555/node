const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const { ServerException } = require('../../utilities/exceptions');

const createUser = async (data) => {
  try {
    const user = new User(data);
    await user.save();
    const token = jwt.sign({ userId: user._id }, config.get('tokenSecret'));
    return { token, user };
  } catch (err) {
    throw new ServerException('Internal Server Error');
  }
};

module.exports = createUser;
