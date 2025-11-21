

const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");



app.use(cors({
    origin: "http://localhost:3001",
    credentials: true // allow cookies/jwt
}));
app.use(express.json());
app.use(cookieParser());

// ---------------------------------
// ⭐ ADD THIS (IMPORTANT)
// ---------------------------------
const userRouter = require("./Routers/userRouter");
app.use("/api/user", userRouter);
// ---------------------------------

const { PORT, USER_NAME, USER_PASSWORD } = process.env;
const JWT_SECRET = "my_jwt_secret_key";

const durl = `mongodb+srv://${USER_NAME}:${USER_PASSWORD}@cluster0.5liukrt.mongodb.net/?appName=Cluster0`;

mongoose
    .connect(durl)
    .then(() => console.log("mongoose connected"))
    .catch(err => console.log(err.message));



app.use((req, res) => {
    res.status(404).json({ status: "failure", message: "route not found" });
});

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});
