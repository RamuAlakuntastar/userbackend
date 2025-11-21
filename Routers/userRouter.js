

const express = require("express");
const userRouter = express.Router();

const { getAlluser, getUserById, createUser, deleteByUserId } = require("../Controllers/userController");


const { 
    signUpController,
    logInController, 
} = require("../Controllers/authController")

const checkInput = function (req, res, next) {
  if (req.method === "POST" && Object.keys(req.body).length === 0) {
    return res.status(400).json({
      status: "failure",
      message: "Request body is empty"
    });
  }
  next();
};

userRouter.get("/", getAlluser);
userRouter.post("/", checkInput, createUser);
userRouter.get("/:userId", getUserById);
userRouter.delete("/:userId", deleteByUserId);

userRouter.post("/signup", signUpController);
userRouter.post("/login", logInController);

module.exports = userRouter;
