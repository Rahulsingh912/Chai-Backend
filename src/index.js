

import express from "express"
import connectDB from './db/database.js';
const app=express();
import dotenv from 'dotenv'

//require('dotenv').config({path:'./env'});
dotenv.config({
    path:'./env'
})

connectDB()