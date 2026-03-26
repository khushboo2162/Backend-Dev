import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection established");
  } catch (error) {
    console.log("connection fail", error);
  }
};

export default connectDb;