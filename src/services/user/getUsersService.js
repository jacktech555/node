const User = require('../../models/User');

const { BadRequestException } = require('../../utilities/exceptions');

const getUsersService = async (page, limit) => {
  page = page <= 0 ? 1 : page;
  try {
    const result = await User.find()
      .limit(limit)
      .skip((page - 1) * limit);

    const numOfItems = await User.countDocuments();
    const totalPages = Math.ceil(numOfItems / limit);
    return {
      TotalPages: totalPages,
      TotalEntries: numOfItems,
      CurrentPage: parseInt(page),
      ItemPerPage: limit,
      result,
    };
  } catch (err) {
    throw new ServerException('Internal Server Error');
  }
};
module.exports = getUsersService;
