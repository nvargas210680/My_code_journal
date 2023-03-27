import mongoose from "mongoose";
const Schema  = mongoose.Schema
const userSchema  = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password: {
        type: String
    },
    journalName: {
        type: String
    },
    file: {
        type: image
    }

    
})
const User = mongoose.model("User", userSchema)
module.exports = User