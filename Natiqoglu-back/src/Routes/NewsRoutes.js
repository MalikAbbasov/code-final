import express from "express";
import { authMiddleware } from "../Middleware/AuthMiddleware.js";
import { addNews, deleteNewsById, dislike, getAllNews, getNewsById, like, updateNewsById } from "../Controller/NewsController.js";
export const newsRoute = express.Router();


newsRoute.get("/", getAllNews);
newsRoute.get("/:id", getNewsById);
newsRoute.post("/", addNews);
newsRoute.put("/:id", authMiddleware(["admin"]), updateNewsById);
newsRoute.delete("/:id", authMiddleware(["admin"]), deleteNewsById);
newsRoute.post("/like/:newsId/:userId", authMiddleware(["User","admin"]), like);
newsRoute.post("/dislike/:newsId/:userId", authMiddleware(["User","admin"]), dislike);
