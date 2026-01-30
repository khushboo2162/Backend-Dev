import express from 'express';
const app=express();

let mid1=(req,res,next)=>{
    console.log("middleware1");
    next();
}
let mid2=(req,res,next)=>{
    console.log("middleware2");
    next();
}


app.get('/',mid1,mid2,(req,res)=>{
    console.log("req url is",req.url);
    res.send("server is running");
    
})
app.listen(3000,()=>{
    console.log(`server is running on http://localhost:${3000}`);
});