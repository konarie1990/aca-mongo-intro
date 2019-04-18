const { UsersModel } = require("../../mongo/models");

const defaultUser = {
  name: "Ted",
  age: "24"
};

const getAll = () => {
  return UsersModel.find({});
};

const getOne = name => {
  // find one user by name
  // passing in an object literal - the key and value is the same
  // console.log(name);

  return UsersModel.findOne({ name });
};

// ** added get user by id for extra practice
const getUserById = id => {
  return UsersModel.findOne({ _id: id });
};

const createDefault = () => {
  // insert default user into db
  return UsersModel.create(defaultUser);
};

const createUser = user => {
  // insert user from POST request into db
  return UsersModel.create(user);
};

const updateUser = (name, updates) => {
  // use name as the query and updates for the updates
  return UsersModel.findOneAndUpdate({ name }, updates);
};

const deleteUser = name => {
  // use name as the query
  return UsersModel.findOneAndDelete({ name });
};

module.exports = {
  getAll,
  getOne,
  getUserById,
  createDefault,
  createUser,
  updateUser,
  deleteUser
};
