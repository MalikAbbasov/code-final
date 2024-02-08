import express from 'express'
import { addNews, deleteNewsById, getAllNews, getNewsById, updateNewsById } from '../Controller/NewsController/NewsController.js'
import { authMiddleware } from '../Middleware/AuthMiddleware.js'
export const newsRoute = express.Router()

newsRoute.get('/',getAllNews )
newsRoute.get('/:id', getNewsById)
newsRoute.post('/', addNews)
newsRoute.put('/:id', authMiddleware(["User","admin"]),updateNewsById)
newsRoute.delete('/:id',authMiddleware(["admin"]), deleteNewsById)