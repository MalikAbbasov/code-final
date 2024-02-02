import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    password: String,
    role: { type: String, default: "User" },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("UserModel", userSchema);
