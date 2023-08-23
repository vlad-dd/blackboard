import { notificate } from "../utils/notificate.js";
import { REQUEST_LOGGER_ERROR_STATUS, REQUEST_METHODS } from "./constants.js";

export default (request, _, next) => {
    try {
        notificate(`${new Date()} --- Request [${request.method}] [${request.url}]`, REQUEST_METHODS[request.method])
    } catch (error) {
        notificate(REQUEST_LOGGER_ERROR_STATUS, 31);
    }
    next();
};
