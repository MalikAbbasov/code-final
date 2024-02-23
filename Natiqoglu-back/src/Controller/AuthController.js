
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../Model/UserModel.js";

export const handleLoginController = async (req, res) => {
  try {
    const { name,email, password } = req.body; 
    // console.log(password);
    // console.log(image);
    const users = await UserModel.findOne({ name,email });
    // console.log(users.password)
    const isPasswordCorrect = await bcrypt.compare(password, users.password);
    // console.log(isPasswordCorrect);
    if (!users) {
      return res.send("user not found");
    }
    
    if (!isPasswordCorrect) {
      return res.send("wrong password");
    }

    const token = jwt.sign(
      { name,email, role: users.role, image: users.image, userId:users._id },
      process.env.JWT_SECRET_KEY
    );
    res.json(token);
  } catch (error) {
    res.send(error.message);
  }
};

export const handleRegisterController = async (req, res) => {
  const { name,email, password,image } = req.body;
  console.log(password);
  const hash = bcrypt.hashSync(password, 12);
  console.log(hash);
  try {
    const users = new UserModel({ name,email,image, password: hash });
    await users.save(); 
    const token = jwt.sign(
      { name: users.name, email: users.email , image:users.image, role: users.role },
      process.env.JWT_SECRET_KEY
    );
    res.json(token);
  } catch (error) {
    res.send(error.message);
  }
};
