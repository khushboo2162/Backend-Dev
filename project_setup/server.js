import express from "express";
import userRoute from "./router/userRoute.js";

let app=express();
app.use("/api",userRoute);

app.listen(3000,()=>{
    console.log("server is walking");
})