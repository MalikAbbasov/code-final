import express from 'express'
import mongoose, { Schema } from 'mongoose'
const app = express()
const port = process.env.PORT
app.use(express.json())
import 'dotenv/config'
import cors from 'cors'
import { userRoute } from './src/Routes/UserRoutes.js'
import { authRoute } from './src/Routes/AuthRoutes.js'
app.use(cors())

app.use("/", userRoute)
app.use("/", authRoute)



//crud functions for news
// app.get('/', async (req, res) => {
//     try {
//         const news = await NewsModel.find({})
//         res.send(news)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.get('/:id', async (req, res) => {
//     const {id} = req.params
//     try {
//         const news = await NewsModel.findById(id)
//         res.send(news)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.post('/', async (req, res) => {
//     const {image,name,about}=req.body
//     try {
//         const news = new NewsModel({image,name,about})
//         await news.save()
//         res.send(news)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.put('/:id', async (req, res) => {
//     const {id} = req.params
//     const {image,name,about}=req.body
//     try {
//         const news = await NewsModel.findByIdAndUpdate(id,{image,name,about})
//         res.send(news)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// app.delete('/:id', async (req, res) => {
    
//     const {id} = req.params
//     try {
//         const news = await NewsModel.findByIdAndDelete(id)
//         res.send(news)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

//   const newsSchema = new Schema({
//     image: String,
//     name: String,
//     about: String
//   })

//   const NewsModel = mongoose.model('NewsModel', newsSchema);

  mongoose.connect(process.env.DB_SECRET_KEY)
  .then(() => console.log('Connected!'))
  .catch(() => console.log('Not Connected!'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})