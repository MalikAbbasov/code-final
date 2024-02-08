import { UserModel } from "../../Model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const handleLoginController = async (req, res) => {
  try {
    const { name, password } = req.body;
    const users = await UserModel.findOne({ name });
    if (!users) {
      res.send("users not found");
      return
    }
    if (users.password !== password) {
      res.send("wrong password");
      return
    }
    const token = jwt.sign({ name, role: users.role }, process.env.JWT_SECRET_KEY);
    res.json(token);
  } catch (error) {
    res.send(error.message)
  }
};

export const handleRegisterController = async (req, res) => {
  const { name, password } = req.body;
  const hash = bcrypt.hashSync(password, 12);
  try {
    const users = new UserModel({ name, hash });
    const token = jwt.sign({ name:users.name, role: users.role}, process.env.JWT_SECRET_KEY);
    await users.save();
    res.json(token);
  } catch (error) {
    res.send(error.message);     
  }
};
