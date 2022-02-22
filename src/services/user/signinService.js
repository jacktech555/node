const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const {
  UnauthorizedException,
  UnprocessableEntity,
  ServerException,
} = require('../../utilities/exceptions');
const config = require('config');

const signinUser = async (data) => {
  const { email, password } = data;

  if (!email || !password) {
    throw new UnprocessableEntity('Must provide email and password');
  }
  let user;
  try {
    user = await User.findOne({ email: email });
  } catch (e) {
    throw new ServerException(
      'can not process request due to server side error'
    );
  }
  if (!user) {
    throw new UnauthorizedException('Invalid password or email');
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, config.get('tokenSecret'));
    return {
      token,
      data: {
        id: user._id,
      },
    };
  } catch (e) {
    throw new UnauthorizedException('Invalid password or email');
  }
};

module.exports = signinUser;
