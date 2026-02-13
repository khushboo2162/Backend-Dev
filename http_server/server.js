const http=require('http');
const fs=require('fs');
const { isUtf8 } = require('buffer');

// const server=http.createServer((req,res)=>{
//     console.log("url"+req.url);
//     console.log("https method" +req.method);

//     res.writeHead(200,{
//         "content-type":"text/html"
//     })
//     res.end("Hello");
// })

// server.listen(3000,()=>{
//     console.log("server is runnning");
// })

// const server = http.createServer((req, res) => {
//     let user = {
//         username: "deepak",
//         email: "qwerty@gmail.com"
//     };

//     res.writeHead(200, {
//         "Content-Type": "application/json"
//     });

//     res.end(JSON.stringify({
//         success: true,
//         user
//     }));
// });

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });


//  const server=http.createServer((req,res)=>{
//     res.writeHead(200,{
//         "content-type":"text/html"
//     })
//     res.end("<h1>Home Page</h1>");
//     })


const server = http.createServer((req, res) => {
    fs.readFile('./public/index.html', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Server error");
            return; // ⭐ VERY IMPORTANT
        }

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(data);
    });
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});