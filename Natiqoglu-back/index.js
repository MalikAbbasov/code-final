import express from 'express'
import mongoose from 'mongoose'
const app = express()
const port = process.env.PORT
app.use(express.json())
import 'dotenv/config'
import cors from 'cors'
import { userRoute } from './src/Routes/UserRoutes.js'
import { authRoute } from './src/Routes/AuthRoutes.js'
import { newsRoute } from './src/Routes/NewsRoutes.js'
app.use(cors())

app.use("/user", userRoute)
app.use("/news", newsRoute)
app.use("/", authRoute)


mongoose.connect(process.env.DB_SECRET_KEY)
  .then(() => console.log('Connected!'))
  .catch(() => console.log('Not Connected!'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})