import express from "express";
const app = express()
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
dotenv.config()
import todoRoutes from "./routes/todoroutes.js";
import authRoutes from './routes/authRoutes.js'
app.use(express.json());
app.use(cors());
app.use(cookieParser());


//Routes here
app.use('/api/todos/',todoRoutes)
app.use('/api/auth/',authRoutes)

mongoose.connect(process.env.MONGO).then(() => {
    console.log('starting on port 8080');
    app.listen(8080);
  })
  
  app.get('/',(req,res)=>{
    res.send("server is up and running successfully")
  })