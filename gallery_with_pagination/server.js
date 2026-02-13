import express from 'express';
import path from 'path';
import galleryRoute from './router/galleryRoute.js';
import userRoute from "./router/userRoute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT=process.env.PORT || 3000;

app.set("view engine","ejs");

app.use("/static",express.static(path.join(process.cwd(),"public")))

app.use("/",galleryRoute);

app.use("/user",userRoute);

app.listen(PORT,()=>{
    console.log("server is running");
})