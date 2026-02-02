import express from 'express';
const router=express.Router();
// malware
let  loginvalidation =(req,res,next)=>{
      const token =req.query.token;
      if(token=="admin123"){
        next();
      }
      else{
        res.send("ecess denied");
      }
}
router.get("/signUp",(req,res)=>{
    res.send("sign up route")
});

router.get("/signIn",(req,res)=>{
    res.send("sign in route")
});
export default router;