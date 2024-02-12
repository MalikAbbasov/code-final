import { NewsModel } from "../../Model/NewsModel.js"

export const getAllNews = async (req, res) => {
    try {
        const news = await NewsModel.find({})
        res.send(news)
    } catch (error) {
        res.send("not found")
    }
}

export const getNewsById =async (req, res) => {
    const {id} = req.params
    try {
        const news = await NewsModel.findById(id)
        res.send(news)
    } catch (error) {
        res.send(error.message)
    }
}

export const addNews = async (req, res) => {
    const {image,name,about,category,comments,like,dislike,view}=req.body
    try {
        const news = new NewsModel({image,name,about,category,comments,like,dislike,view})
        await news.save()
        res.send(news)
    } catch (error) {
        res.send(error.message)
    }
}

export const updateNewsById = async (req, res) => {
    const {id} = req.params
    const {image,name,about,category,comments,like,dislike,view}=req.body
    try {
        const news = await NewsModel.findByIdAndUpdate(id,{image,name,about,category,comments,like,dislike,view})
        res.send(news)
    } catch (error) {
        res.send(error.message)
    }
}

export const deleteNewsById = async (req, res) => {
    
    const {id} = req.params
    try {
        const news = await NewsModel.findByIdAndDelete(id)
        res.send(news)
    } catch (error) {
        res.send(error.message)
    }
}