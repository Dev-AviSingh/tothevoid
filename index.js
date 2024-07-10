require("dotenv").config()

const express = require("express") 
const mongoose = require("mongoose")


app = express()
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
.then(
    () => {
        console.log("Connected to mongodb server.")

        app.listen(process.env.PORT, () => {
            console.log("App started.")
        })
    }
)
