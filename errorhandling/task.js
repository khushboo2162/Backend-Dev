
const http = require("http");
const fs = require("fs");
const { Transform } = require("stream");

const logStream = fs.createWriteStream("access.log", { flags: "a" });


function logRequest(req) {
  const log = `${new Date().toISOString()} | ${req.method} | ${req.url}\n`;
  logStream.write(log);
}


const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});


const replaceVowelsTransform = new Transform({
  transform(chunk, encoding, callback) {
    const result = chunk.toString().replace(/[aeiou]/gi, "*");
    this.push(result);
    callback();
  }
});


const server = http.createServer((req, res) => {

  logRequest(req);


  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server is running");
  }


  else if (req.method === "GET" && req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the About page");
  }


  else if (req.method === "GET" && req.url === "/user") {
    const user = {
      name: "Khushboo",
      role: "Backend Developer",
      age: 22
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  }


  else if (req.method === "POST" && req.url === "/uppercase") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    req.pipe(upperCaseTransform).pipe(res);
  }

  
  else if (req.method === "POST" && req.url === "/process") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    req
      .pipe(upperCaseTransform)
      .pipe(replaceVowelsTransform)
      .pipe(res);
  }

 
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Page Not Found");
  }
});


server.listen(3000, () => {
  console.log("Server running on port 3000");
});
