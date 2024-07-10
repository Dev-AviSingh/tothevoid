const mongoose = require("mongoose")



module.exports.comment = new mongoose.Schema({
    commentID:{
        type:String,
        required:true
    },
    commentContent:String
})

module.exports.post = new mongoose.Schema({
    postID:String,
    content:String,
    comments:[module.exports.comment],
    likes:Number,
    dislikes:Number
})