import express from 'express'
import { addNews, deleteNewsById, getAllNews, getNewsById, updateNewsById } from '../Controller/NewsController/NewsController.js'
import { authMiddleware } from '../Middleware/AuthMiddleware.js'
export const newsRoute = express.Router()

newsRoute.get('/news',getAllNews )
newsRoute.get('/news/:id', getNewsById)
newsRoute.post('/news',authMiddleware(["admin"]), addNews)
newsRoute.put('/news/:id', authMiddleware(["User","admin"]),updateNewsById)
newsRoute.delete('/news/:id',authMiddleware(["admin"]), deleteNewsById)