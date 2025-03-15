import { User } from "../Models/User.model.js";

export const DeleteUser = async (req,res) => {
    const id = req.params.id;
    const result = await User.findByIdAndDelete({_id:id});
    res.json(result);
}