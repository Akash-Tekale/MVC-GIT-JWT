import { User } from "../Models/User.model.js";

export const GetUsers =async (req,res) =>{
    const Users =await User.find();
    console.log(Users)
    res.json(Users);
}