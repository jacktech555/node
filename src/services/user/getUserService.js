const User = require('../../models/User');

const { NotFoundException } = require('../../utilities/exceptions');

const getUserService = async (id) => {
  try {
    const result = await User.findById(id);
    return {
      data: {
        email: result.email,
        salary: result.salary,
      },
    };
  } catch (err) {
    throw new NotFoundException('no user with given id found');
  }
};
module.exports = getUserService;
