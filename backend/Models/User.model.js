import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    mobile:{
        required:true,
        type:Number
    }
},{timestamps:true})

export const User = mongoose.model('user',UserSchema);