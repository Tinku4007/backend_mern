import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    userId:String,
    token:String
});

const User = mongoose.model("users", userSchema)
export default User;