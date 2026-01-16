const fs=require("fs");

fs.readFile("input.txt","utf-8",(err,data)=>{
    if(err){
        console.error("Error occured: "+err);
        return;
    }

    const words=data.trim().split(/\s+/);
    const wordlen=words.length;

    fs.writeFile("output.txt",`wordcount: ${wordlen}`,(err)=>{
        if(err){
        console.error("Error occured: "+err);
        return;
    }

    console.log("Word count written to output.txt");
    });
});