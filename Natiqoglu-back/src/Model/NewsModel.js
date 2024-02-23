import mongoose, { Schema } from "mongoose";

const newsSchema = new Schema(
  {
    image: String,
    name: String,
    about: String,
    category: String,
    date: String,
    comments: String,
    like: {
      type: Number,
      default: 0,
    },
    dislike: {
      type: Number,
      default: 0,
    },
    likedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    dislikedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    view: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const NewsModel = mongoose.model("NewsModel", newsSchema);
