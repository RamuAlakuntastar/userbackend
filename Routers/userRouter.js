const express = require("express");
const userRouter = express.Router();


const {getAlluser, getUserById, createUser,  deleteByUserId} = require("../Controllers/userController");



const checkInput = async function(req, res, next) {
    if(req.method === "POST") {
        if(Object.keys(req.body).length === 0){
            return res.status(500).json({
                status:"failure",
                message:"user is empty"
            });
        }
    }
    next();
};

userRouter.get("/", getAlluser);
userRouter.post("/", checkInput, createUser);
userRouter.get("/:userId", getUserById);
userRouter.delete("/:userId", deleteByUserId);

module.exports = userRouter;
