const User = require('../../models/User');

const { ServerException } = require('../../utilities/exceptions');

const getUsersService = async (page, limit) => {
  page = page <= 0 ? 1 : page;
  try {
    const result = await User.find({}, { email: 1, salary: 1, _id: 1 })
      .limit(limit)
      .skip((page - 1) * limit);
    const numOfItems = await User.countDocuments();
    const totalPages = Math.ceil(numOfItems / limit);
    const data = result.map((element) => {
      return {
        id: element._id,
        email: element.email,
        salary: element.salary,
      };
    });
    return {
      TotalPages: totalPages,
      TotalEntries: numOfItems,
      CurrentPage: parseInt(page),
      ItemPerPage: limit,
      Data: data,
    };
  } catch (err) {
    throw new ServerException('Internal Server Error');
  }
};
module.exports = getUsersService;
