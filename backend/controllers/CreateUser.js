import { User } from "../Models/User.model.js";

export const CreateUser =async (req,res) =>{
   try {
    const {name,email,mobile} = req.body;
    console.log(name,mobile,email);
    if(name && email && mobile){
        const user =await User.create({name,email,mobile});
        res.json(user);
    }else{
        console.log("name,email,mobile is requuired please enter all fields");
    }
   } catch (error) {
    console.log(error);
   }
}