import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { INVALID_TOKEN_ERROR_MESSAGE, UNEXISTED_TOKEN_ERROR_MESSAGE } from "./constants.js";

dotenv.config();

export default (request, response, next) => {
    const token = (request.headers.authorization ?? "").replace(/Bearer\s?/, "");
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            request.userId = decoded._id;
            next();
        } catch (error) {
            return response.status(403).json({
                message: INVALID_TOKEN_ERROR_MESSAGE
            })
        }
    } else {
        return response.status(403).json({
            message: UNEXISTED_TOKEN_ERROR_MESSAGE
        });
    }
}