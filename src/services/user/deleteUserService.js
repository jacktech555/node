const User = require('../../models/User');

const { BadRequestException } = require('../../utilities/exceptions');

const deleteUserService = async (id) => {
  try {
    const result = await User.findById(id);
    await result.remove();
    return result.email;
  } catch (err) {
    throw new BadRequestException('wrong id');
  }
};
module.exports = deleteUserService;
