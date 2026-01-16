const http=require('http');
const fs=require('fs');
// const readStream = fs.createReadStream("./log.txt",{
//  highWaterMark:64*1024
// });
// readStream.on("data",(chunk)=>{
//     console.log(chunk.toString());
// })
const writeStream=fs.createWriteStream('info.txt',{
    flags:"a" //for append 
})
writeStream.write("\n hkdbwwkeljkl")
writeStream.write("\n hkdbwwkeljkl")
writeStream.write("\n hkdbwwkeljkl")
writeStream.write("\n hkdbwwkeljkl")
writeStream.end()
writeStream.on("finish",()=>{
    console.log('writing finish ');
})
