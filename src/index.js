import mongoose from "mongoose";
import { DB_Name } from "./constants";









/*
import express from 'express';
const app = express();

//adding semicolon before iife is a good practice
;( async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        app.on("error", (error)=> {
            console.log("ERR, Express is not able to connect with DB", error)
        })
        app.listen(process.env.PORT, ()=> {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error(error);
        throw error
    }
})()

*/