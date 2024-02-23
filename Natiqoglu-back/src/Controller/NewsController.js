import { NewsModel } from "../Model/NewsModel.js";
import { UserModel } from "../Model/UserModel.js";

export const getAllNews = async (req, res) => {
  try {
    const news = await NewsModel.find({});
    res.send(news);
  } catch (error) {
    res.send("not found");
  }
};

export const getNewsById = async (req, res) => {
  const { id } = req.params;
  try {
    const news = await NewsModel.findById(id);
    news.view++ ;
    await news.save();
    res.json(news);
  } catch (error) {
    res.send(error.message);
  }
};

export const addNews = async (req, res) => {
  const { image, name, about, category, comments, like, dislike, view } =
    req.body;
  try {
    const news = new NewsModel({
      image,
      name,
      about,
      category,
      comments,
      like,
      dislike,
      view,
    });
    await news.save();
    res.send(news);
  } catch (error) {
    res.send(error.message);
  }
};

export const updateNewsById = async (req, res) => {
  const { id } = req.params;
  const { image, name, about, category, comments, like, dislike, view } =
    req.body;
  try {
    const news = await NewsModel.findByIdAndUpdate(id, {
      image,
      name,
      about,
      category,
      comments,
      like,
      dislike,
      view,
    });
    res.send(news);
  } catch (error) {
    res.send(error.message);
  }
};

export const deleteNewsById = async (req, res) => {
  const { id } = req.params;
  try {
    const news = await NewsModel.findByIdAndDelete(id);
    res.send(news);
  } catch (error) {
    res.send(error.message);
  }
};

export const like = async (req, res) => {
  try {
    const newsId = req.params.newsId;
    const userId = req.params.userId;

    const newsExist = await NewsModel.findById(newsId);
    const userExist = await UserModel.findById(userId);

    if (!newsExist) {
      return res.status(400).json({ message: "News not found" });
    }

    if (!userExist) {
      return res.status(400).json({ message: "User not found" });
    }

    if (newsExist.likedBy.includes(userId)) {
      return res.status(400).json({ message: "News already liked" });
    }

    if (newsExist.dislikedBy.includes(userId)) {
      newsExist.dislikedBy.pull(userId);
      newsExist.dislike -= 1;
    }

    newsExist.likedBy.push(userId);
    newsExist.like += 1;

    const saveLikes = await newsExist.save();
    

    res.status(200).json(saveLikes);
  } catch (error) {
    res.send(error.message);
  }
};

export const dislike = async (req, res) => {
  try {
    const newsId = req.params.newsId;
    const userId = req.params.userId;

    const newsExist = await NewsModel.findById(newsId);
    const userExist = await UserModel.findById(userId);

    if (!newsExist) {
      return res.status(400).json({ message: "News not found" });
    }
    if (!userExist) {
      return res.status(400).json({ message: "User not found" });
    }

    if (newsExist.dislikedBy.includes(userId)) {
      return res.status(400).json({ message: "News already disliked" });
    }

    if (newsExist.likedBy.includes(userId)) {
      newsExist.likedBy.pull(userId);
      newsExist.like -= 1;
    }

    newsExist.dislikedBy.push(userId);
    newsExist.dislike += 1;

    const saveDislikes = await newsExist.save();
    

    res.status(200).json(saveDislikes);
  } catch (error) {
    res.send(error.message);
  }
};