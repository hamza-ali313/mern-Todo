import express from "express";
const app = express()
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
dotenv.config()
import todoRoutes from "./routes/todoroutes.js";
import authRoutes from './routes/authRoutes.js';
import path from "path"
import * as url from 'url';






app.use(express.json());
app.use(cors());
app.use(cookieParser());


//Routes here
app.use('/api/todos/',todoRoutes)
app.use('/api/auth/',authRoutes)
 const port = process.env.PORT || 5000
mongoose.connect(process.env.MONGO).then(() => {
    console.log(`starting on port ${port}`);
    app.listen(port);
  })
  
  // app.get('/',(req,res)=>{
  //   res.send("server is up and running successfully")
  // })
 
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

  // app.use('/', require(path.join(__dirname, 'api', 'routes')));

// static files (build of your frontend)
// if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './frontend/build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'));
  })
// }

export default app