 import mongoose from "mongoose";
 import { DB_Name } from "../constants.js";

 const connectDB = async()=> {
    try {
       let connectionInstance = await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("MongoDB connection error", error);
       //node specific
        process.exit(1);
    }
 }

 export default connectDB;
 //learn more about connmectionInstance