import express from 'express'
import { addUser, deleteUserById, getAllUsers, getUserById, updateUser } from '../Controller/UserController/UserController.js'
import { authMiddleware } from '../Middleware/AuthMiddleware.js'
export const userRoute = express.Router()

userRoute.get('/',getAllUsers )
userRoute.get('/:id',getUserById )
userRoute.post('/',authMiddleware(["admin"]),addUser)
userRoute.put('/:id',authMiddleware(["admin"]),updateUser)
userRoute.delete('/:id',authMiddleware(["admin"]),deleteUserById)