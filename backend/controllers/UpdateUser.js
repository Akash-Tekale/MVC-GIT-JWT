import { User } from "../Models/User.model.js";

export const UpdateUser =async (req,res)=>{
    const id = req.params.id;
    const {name,email,mobile} =req.body;
    const result = await User.findByIdAndUpdate({_id:id},{name,email,mobile});
    res.json(result);
}