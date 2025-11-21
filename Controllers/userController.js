const UserModel = require("../Models/userModel")

const {getAllFactory, createFactory, getFactoryById, deleteByFactoryId} = require("../Utilitys/curdFactory")


const getAlluser = getAllFactory(UserModel)
const getUserById = getFactoryById(UserModel)
const createUser = createFactory(UserModel)
const  deleteByUserId = deleteByFactoryId(UserModel)


module.exports = {getAlluser, getUserById, createUser,  deleteByUserId} 


