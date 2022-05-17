import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
export const register = async (req, res, next) => {
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        });
        await newUser.save();
        res.status(200).json("User created");
    } catch (error) {
        return next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        });
        if (!user) {
            return next(createError(404, "User not found"));
        }
        const isPwdValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPwdValid) return next(createError(400, "Invalid Username/Password"));
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_AUTH);
        const { password, isAdmin, ...userDetails } = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true
        })
            .status(200)
            .json({ userDetails });
    } catch (error) {
        return next(error);
    }
};
