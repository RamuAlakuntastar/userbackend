


const mongoose = require("mongoose");

const userRulesSchema = {
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    confirmPassword: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value === this.password;
            },
            message: "Passwords do not match"
        }
    }
};

const userSchema = new mongoose.Schema(userRulesSchema);

const UserModel = mongoose.model("UserModel", userSchema);

module.exports = UserModel;

