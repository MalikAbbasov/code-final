import express from 'express'
import { authMiddleware } from '../Middleware/AuthMiddleware.js'
import { addUser, deleteUserById, getAllUsers, getUserById, updateUser } from '../Controller/UserController.js'
export const userRoute = express.Router()

userRoute.get('/',authMiddleware(["admin"]),getAllUsers )
userRoute.get('/:id',authMiddleware(["User","admin"]),getUserById)
userRoute.post('/',authMiddleware(["admin"]),addUser)
userRoute.put('/:id',authMiddleware(["User","admin"]),updateUser)
userRoute.delete('/:id',authMiddleware(["admin"]),deleteUserById) 