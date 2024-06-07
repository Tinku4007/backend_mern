const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone:String,
    password:String
})

module.exports = mongoose.model("Users" , UserSchema)