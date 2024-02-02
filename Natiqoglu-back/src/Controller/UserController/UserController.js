import { UserModel } from "../../Model/UserModel.js"

export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({})
        res.send(users)
    } catch (error) {
        res.send(error.message)
    }
}

export const getUserById = async (req, res) => {
    const {id} = req.params
    try {
        const user = await UserModel.findById(id)
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
}

export const addUser =  async (req, res) => {
    const {name,password}=req.body
    try {
        const users = new UserModel({name,password})
        await users.save()
        res.send("User created")
    } catch (error) {
        res.send(error.message)
    }
}

export const updateUser = async (req, res) => {
    const {id} = req.params
    const {name,password,role}=req.body
    try {
        const users = await UserModel.findByIdAndUpdate(id,{name,password,role})
        res.send("User updated")
    } catch (error) {
        res.send(error.message)
    }
}

export const deleteUserById = async (req, res) => {
    const {id} = req.params
    try {
        const users = await UserModel.findByIdAndDelete(id)
        res.send("User deleted")
    } catch (error) {
        res.send(error.message)
    }
}