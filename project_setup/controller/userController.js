import { userData } from "../model/data.js"

export const alluser=(req,res)=>{
    res.json({
        message:"All user",
        userData
    })
}