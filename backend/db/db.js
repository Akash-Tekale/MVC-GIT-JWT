import mongoose from "mongoose";
export const DB = () =>{
    try {
        mongoose.connect('mongodb+srv://akash:akash@cluster0.wkcwr.mongodb.net/');
        console.log("Mongodb connected ");
    } catch (error) {   
        console.log("Mongo ERROR ! ! ! "+error);
    }    
}