import mongoose from "mongoose";
export const DB = () =>{
    try {
        mongoose.connect('mongodb://localhost:27017/demoapi');
        console.log("Mongodb connected ");
    } catch (error) {   
        console.log("Mongo ERROR ! ! ! "+error);
    }    
}