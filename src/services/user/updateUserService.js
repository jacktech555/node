const User = require('../../models/User');

const { BadRequestException } = require('../../utilities/exceptions');

const updateUserService = async (id, data) => {
  try {
    const result = await User.findById(id);
    Object.assign(result, data);
    result.save();
    return result;
  } catch (err) {
    throw new BadRequestException('wrong id');
  }
};
module.exports = updateUserService;
