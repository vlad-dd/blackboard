import { body } from "express-validator";

export const registerValidator = [
    body("fullName", "Should be at least 1 symbol!").isLength({ min: 1 }),
    body("email", "Make sure it is an email format!").isEmail(),
    body("password", "Should be at least 8 symbols!").isLength({ min: 8 }),
    body("avatarUrl", "Make sure you entered the URL.").optional().isURL()
];

export const loginValidator = [
    body("email", "Make sure it is an email format!").isEmail(),
    body("password", "Should be at least 8 symbols!").isLength({ min: 8 }),
];