
const UserModel = require("../Models/userModel");


const signUpController = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json({
      status: "success",
      user
    });
  } catch (e) {
    res.status(400).json({ status: "failure", message: e.message });
  }
};

const logInController = async (req, res) => {
  try {
    const {password } = req.body;

    const user = await UserModel.findOne({password });

    if (user.password !== password) {
      return res.status(400).json({
        status: "failure",
        message: "password incorrect"
      });
    }

    res.status(200).json({
      status: "success",
      message: "Logged in successfully"
    });

  } catch (e) {
    res.status(400).json({ status: "failure", message: e.message });
  }
};


module.exports = {
  signUpController,
  logInController,
};
