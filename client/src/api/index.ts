import axios from "axios";
import { buildHeadersTokenObject } from "./utils";

export const instanse = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL
});

export const API = {
    register(credentials: any) {
        return instanse.post("auth/register", { ...credentials });
    },

    login(credentials: any) {
        return instanse.post("auth/login", { ...credentials });
    },
    me(token: any) {
        return instanse.get("/profile", buildHeadersTokenObject(token));
    },
    getAllPlannerCards(token: any) {
        return instanse.get("/cards", buildHeadersTokenObject(token));
    },
    createPlannerCard(token: any, userInput: any) {
        return instanse.post("/cards", userInput, buildHeadersTokenObject(token));
    },
    updatePlannerCard (token: any, config: any) {
        return instanse.patch("/cards", config, buildHeadersTokenObject(token) );
    },
    deletePlannerCard(token: any, sectionId: string, cardId: string) {
        return instanse.delete("/cards", { headers: { 'Authorization': 'Bearer ' + token }, data: { sectionId, cardId } });
    },
    deleteSection(token: any, selectedSectionId: string) {
        return instanse.delete("/cards/section", { headers: { 'Authorization': 'Bearer ' + token }, data: { selectedSectionId } });
    }
};
