const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    passwordHas:{
        type:String,
        required:true
    },
    postIDs:{
        type:[String]
    }
})

const User = mongoose.model("user", userSchema)

module.exports = User