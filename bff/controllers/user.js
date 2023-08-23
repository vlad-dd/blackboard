import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";
import dotenv from "dotenv";
import {
    GET_USER_INFORMATION_ERROR_MESSAGE,
    LOGIN_ERROR_MESSAGE,
    LOGIN_STATUS_MESSAGE,
    REGISTRATION_ERROR_MESSAGE,
    REGISTRATION_SUCCESS_MESSAGE,
    UNEXSITED_USER_ERROR_MESSAGE
} from "./constants.js";

dotenv.config();

export const register = async (request, response) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(request.body.password, salt);

        const document = new UserModel({
            fullName: request.body.fullName,
            email: request.body.email,
            passwordHash: password,
            avatarUrl: request.body.avatarUrl
        });

        const user = await document.save();
        const { passwordHash, ...userData } = user._doc;

        response.json({
            ...userData,
            message: REGISTRATION_SUCCESS_MESSAGE
        })
    } catch (error) {
        response.status(500).json({
            message: REGISTRATION_ERROR_MESSAGE,
            error: true
        });
    }
};

export const login = async (request, response) => {
    try {
        const user = await UserModel.findOne({ email: request.body.email });

        if (!user) {
            return response.status(404).json({
                message: LOGIN_STATUS_MESSAGE
            });
        }

        const isValidPassword = await bcrypt.compare(request.body.password, user._doc.passwordHash);

        if (!isValidPassword) {
            return response.status(400).json({
                message: LOGIN_STATUS_MESSAGE
            });
        };

        const token = jwt.sign({
            _id: user._id,
        },
            process.env.SECRET_KEY,
            { expiresIn: "30d" }
        );

        const { passwordHash, ...userInformation } = user._doc;

        response.json({
            ...userInformation,
            token
        });

    } catch (error) {
        response.status(500).json({
            message: LOGIN_ERROR_MESSAGE,
            error: true
        });
    }
}

export const getMe = async (request, response) => {
    try {
        const me = await UserModel.findById(request.userId);
        if (!me) {
            return response.status(404).json({
                message: UNEXSITED_USER_ERROR_MESSAGE
            });
        };
        const { passwordHash, ...information } = me._doc

        response.json({
            ...information
        });
    } catch (error) {
        response.status(500).json({
            message: GET_USER_INFORMATION_ERROR_MESSAGE,
            error: true
        });
    }

}