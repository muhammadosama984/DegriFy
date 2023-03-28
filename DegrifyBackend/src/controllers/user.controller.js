import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { statusCode } from "../utils/constant.js";
import { jsonGenerate } from "../utils/helper.js";

export const Login = async (req, res) => {
  const { email, password } = req.body;
  const users = await User.findOne({ email: email });

  if (!users) {
    return res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Username or password not exists"
      )
    );
  }

  const verified = bcrypt.compareSync(password, users.password);

  if (!verified) {
    return res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Username or password not exists"
      )
    );
  }
  const token = jwt.sign({ userId: User._id }, "sdsdsjcdfef", {
    expiresIn: "1h",
  });
  return res.json(
    jsonGenerate(statusCode.SUCCESS, "Login Succesfull", {
      userId: User._id,
      token: token,
    })
  );
};

export const Register = async (req, res) => {
  const { name, email, password, userRole } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const userExist = await User.findOne({
    $or: [
      {
        email: email,
      },
    ],
  });
  if (userExist) {
    return res.json(
      jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Users already Exists")
    );
  }

  try {
    const result = await User.create({
      name: name,
      email: email,
      password: hashPassword,
      userRole: userRole,
    });

    res.json(
      jsonGenerate(statusCode.SUCCESS, "Registration successfull", {
        userId: result._id,
        // token: token,
      })
    );
  } catch (error) {
    console.log(error);
  }
};