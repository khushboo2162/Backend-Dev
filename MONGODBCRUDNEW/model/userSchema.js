import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: [25, "Name must be under 25 characters"]
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "Password must be at least 8 characters"]
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});

export default mongoose.models.User || mongoose.model("User", userSchema);