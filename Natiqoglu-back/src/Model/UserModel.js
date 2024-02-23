import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: String,
    image: { type: String, default: "https://publicdomainvectors.org/tn_img/abstract-user-flat-4.webp" },
    role: { type: String, default: "User" },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("UserModel", userSchema);
