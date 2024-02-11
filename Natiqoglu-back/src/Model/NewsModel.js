import mongoose, { Schema } from "mongoose";

const newsSchema = new Schema(
  {
    image: String,
    name: String,
    about: String,
    category: String,
    date: String,
    comments:String,
    like:Number,
    dislike:Number,
    view:Number,
  },
  { timestamps: true }
);

export const NewsModel = mongoose.model("NewsModel", newsSchema);
