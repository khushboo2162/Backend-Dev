const fs =require("fs") //import 
const {Transform} = require ("stream")
const upper= new Transform({
    transform(chunk,encoding, cb){
        const modifyData=chunk.toString().toUpperCase();
        cb(null, modifyData)
    }
})
const readStream =fs.createReadStream('./info.txt');
const writeStream = fs.createWriteStream('./infoutput.txt')
readStream
.pipe(upper)
.pipe(writeStream)