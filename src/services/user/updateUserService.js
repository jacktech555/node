const User = require('../../models/User');

const {
  NotFoundException,
  ServerException,
} = require('../../utilities/exceptions');

const updateUserService = async (id, data) => {
  let result;
  try {
    result = await User.findById(id);
  } catch (err) {
    throw new NotFoundException('please privide correct id');
  }
  if ('email' in data) {
    try {
      const records = await User.find({
        _id: { $ne: id },
        email: data.email,
      });
      if (records.length > 0) {
        throw new NotFoundException('same email error');
      }
    } catch (e) {
      throw new NotFoundException('same email error');
    }
  }
  try {
    if ('createdAt' in data) {
      delete data.createdAt;
    }
    data.updatedAt = new Date();
    Object.assign(result, data);
    result.save();
  } catch (e) {
    throw new ServerException('same email error');
  }
  return {
    id,
    data: {
      email: result.email,
      salary: result.salary,
    },
  };
};
module.exports = updateUserService;
