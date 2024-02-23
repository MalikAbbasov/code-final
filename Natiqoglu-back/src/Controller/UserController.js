import { UserModel } from "../Model/UserModel.js"
// 65d37e80253f50a8936afea5

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
    const {name,email,password,image} = req.body
    console.log(password);
    try {
        const users = new UserModel({name,email,password,image})
        await users.save()
        res.send("User created")
    } catch (error) {
        res.send(error.message)
    }
}

export const updateUser = async (req, res) => {
    const {id} = req.params
    const {name,email,password,role,image}=req.body
    try {
        const users = await UserModel.findByIdAndUpdate(id,{name,email,password,role,image})
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