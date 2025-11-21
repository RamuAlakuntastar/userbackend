const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// ------------------------------------
// ⭐ CORS FIX → ALLOW ALL NEEDED ORIGINS
// ------------------------------------
app.use(cors({
    origin: [
        "https://spicymeal-47pdtqo02-ramualakuntastars-projects.vercel.app",  // Vercel frontend
        "http://localhost:3000",  // Local frontend
        "http://localhost:3001"   // Alternative local frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// ------------------------------------
// ⭐ TEST ROUTE TO CHECK CORS (IMPORTANT)
// ------------------------------------
app.get("/api/user/test", (req, res) => {
    res.json({ status: "CORS OK", message: "Your backend is returning correct CORS headers" });
});

// ------------------------------------
// ⭐ MAIN ROUTER
// ------------------------------------
const userRouter = require("./Routers/userRouter");
app.use("/api/user", userRouter);

// ------------------------------------
// ⭐ DATABASE CONNECTION
// ------------------------------------
const { PORT, USER_NAME, USER_PASSWORD } = process.env;

const durl = `mongodb+srv://${USER_NAME}:${USER_PASSWORD}@cluster0.5liukrt.mongodb.net/?appName=Cluster0`;

mongoose
    .connect(durl)
    .then(() => console.log("mongoose connected"))
    .catch(err => console.log(err.message));

// ------------------------------------
// ⭐ 404 HANDLER
// ------------------------------------
app.use((req, res) => {
    res.status(404).json({ status: "failure", message: "route not found" });
});

// ------------------------------------
// ⭐ SERVER START
// ------------------------------------
app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});
