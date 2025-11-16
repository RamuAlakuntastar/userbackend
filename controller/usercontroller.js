const UserModel = require("../Model/userModel")

const {getAllFactory, createFactory, getFactoryById, deleteByFactoryId} = require("../utility/curdFactory")


const getAlluser = getAllFactory(UserModel)
const getUserById = getFactoryById(UserModel)
const createUser = createFactory(UserModel)
const  deleteByUserId = deleteByFactoryId(UserModel)


module.exports = {getAlluser, getUserById, createUser,  deleteByUserId} 


