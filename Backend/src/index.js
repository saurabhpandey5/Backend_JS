import mongoose from 'mongoose';
import { DB_Name } from './constants';
import express from 'express';
const app=express();
(async ()=>{
    try {
        mongoose.connect()
    } catch (error) {
        console.log("Error: ",error);
        throw err;
    }
})()