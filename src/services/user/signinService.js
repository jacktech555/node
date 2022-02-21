const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const {
  UnauthorizedException,
  BadRequestException,
} = require('../../utilities/exceptions');
const config = require('config');

const signinUser = async (data) => {
  const { email, password } = data;

  if (!email || !password) {
    throw new BadRequestException('Must provide email and password');
  }

  const user = await User.findOne({ email: email });
  if (!user) {
    throw new BadRequestException('Invalid password or email');
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, config.get('tokenSecret'));
    return { token, user };
  } catch (e) {
    throw new BadRequestException('Invalid password or email');
  }
};

module.exports = signinUser;
