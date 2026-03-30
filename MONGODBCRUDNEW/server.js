// // import connectDb from "./config/db.js";
// // import dotenv from "dotenv";
// // import express from "express";
// // import router from "./routes/userRoutes.js";
// // import authRoutes from "./routes/authRoutes.js";

// // dotenv.config();
// // connectDb();

// // const app = express();
// // const port = process.env.PORT || 5000;

// // app.use(express.json());

// // app.use("/api", router);
// // app.use("/api/auth , authRoutes");

// // app.listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// // });
// import connectDb from "./config/db.js";
// import dotenv from "dotenv";
// import express from "express"
// import userRoutes from "./routes/userRoutes.js"
// import authRoutes from "./routes/authRoutes.js"

// dotenv.config();
// connectDb();

// const port = process.env.PORT || 5000;
// const app = express();

// app.use(express.json());


// app.use("/api", userRoutes);
// app.use("/api/auth", authRoutes);


// app.listen(port,()=>{
//     console.log("Server is running on port ",port)
// })
import express from "express";
import cookieParser from "cookie-parser";

const connectDb = async () => {
  console.log("DB Connected");
};

export default connectDb;

const app = express();

app.use(cookieParser("my-super-secret-key"));

app.get('/set-cookie', (req, res) => {
  res.cookie('name', 'rohan', { httpOnly: true });
  res.send("Cookie has been set!");
});

const authMiddleware=(req,res,next)=>{
  if(!req.cookies.name){
    res.send("invalid user")
    return;
  }
  next();
}

app.get('/get-cookie',authMiddleware, (req, res) => {
  if (!req.cookies.name) {
    return res.send("invalid user");
  }
  const name = req.cookies.name;
  res.send(`cookie value: ${name}`);
});


app.get('/profile',authMiddleware, (req, res) => {
  if (!req.cookies.name) {
    return res.send("invalid user");
  }
  const name = req.cookies.name;
  res.send(`Welcome to the profile: ${name}`);
});

app.get('/logout',authMiddleware,(req,res)=>{
  res.clearCookie("name");
  res.send("You have been logged out");
})

app.listen(3000, () => console.log("Server running on port 3000"));