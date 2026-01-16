// const {error}= require("console");
// console.log("first");
//  try{
//     throw new error("there is somethinh error ")
//  }

//   catch(error){
//     console.log(error)
//   }
//   console.log(error)
const http= require("http")
const server =http.createServer((req,res)=>{
  try{
      throw new Error("there  is something error") 
  }catch(error){
          console.log(error.message)
  }
     res.end("server is running")
})
server.listen(3000,()=>{
   console.log("server is running ")
})
