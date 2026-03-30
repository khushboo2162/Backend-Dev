import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
app.use(cookieParser("my -super -secret-key"));
app.get("/", (req, res) => {
    res.cookie("name", "rohan ,{httpOnly:true}");
    res.send("cookie set");
});
app.listen(3000, () =>  console.log("server is running on port 3000"));