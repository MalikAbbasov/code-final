import mongoose, { Schema } from "mongoose";

  const newsSchema = new Schema({
    image: String,
    name: String,
    about: String
  })

export const NewsModel = mongoose.model('NewsModel', newsSchema);