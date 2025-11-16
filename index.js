const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const userRouter = require("./Routers/userRouter")
app.use(express.json())
app.use("/api/user", userRouter)


const {PORT, USER_NAME, USER_PASSWORD} = process.env


const durl = `mongodb+srv://${USER_NAME}:${USER_PASSWORD}@cluster0.5liukrt.mongodb.net/?appName=Cluster0`

mongoose
        .connect(durl)
        .then(() => console.log("mongoose connected"))
        .catch((err) => console.log(err.message))

app.use(function(req, res){
    res.status(400).json({
        status:"failure",
        message:"this route not found"
    })
})

app.listen(PORT, function(req, res) {
    console.log(`server is running at ${PORT}`)
})





