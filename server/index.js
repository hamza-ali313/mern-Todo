import express from "express";
const app = express()
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
dotenv.config()
import todoRoutes from "./routes/todoroutes.js";
import authRoutes from './routes/authRoutes.js'
const path = require("path");
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


  app.use('/', require(path.join(__dirname, 'api', 'routes')));

// static files (build of your frontend)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './frontend/build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'));
  })
}


module.exports = app;