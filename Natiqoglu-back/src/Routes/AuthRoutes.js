import express from 'express'
import { handleLoginController, handleRegisterController } from '../Controller/AuthController/AuthController.js'
export const authRoute = express.Router()

authRoute.post('/login',handleLoginController )

authRoute.post('/register', handleRegisterController)