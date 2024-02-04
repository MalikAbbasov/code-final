import express from 'express'
import { addUser, deleteUserById, getAllUsers, getUserById, updateUser } from '../Controller/UserController/UserController.js'
import { authMiddleware } from '../Middleware/AuthMiddleware.js'
export const userRoute = express.Router()

userRoute.get('/users',getAllUsers )
userRoute.get('/users/:id',getUserById )
userRoute.post('/users',authMiddleware(["admin"]),addUser)
userRoute.put('/users/:id',authMiddleware(["admin"]),updateUser)
userRoute.delete('/users/:id',authMiddleware(["admin"]),deleteUserById)