const fs =require("fs") //import 
const {Transform} = require ("stream")
const removeVowel=new Transform({
    transform(chunk,encoding,cb){
        const modifiedData=chunk.toString().replace(/[aeiouAEIOU]/g, "");
        cb(null,modifiedData);
    }
})
const readStream =fs.createReadStream('./info.txt');
const writeStream = fs.createWriteStream('./infoutput.txt')
readStream
.pipe(removeVowel)
.pipe(writeStream)