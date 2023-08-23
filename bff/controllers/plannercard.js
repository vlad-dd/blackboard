import PlannerCardSchema from "../models/PlannerCard.js";
import {
    GET_ALL_PLANNER_CARDS_ERROR,
    PLANNER_CARD_CREATION_ERROR,
    PLANNER_CARD_DELETING_ERROR,
    PLANNER_CARD_DELETING_SUCCESS,
    PLANNER_CARD_UPDATING_ERROR,
    PLANNER_CARD_UPDATING_SUCCESS
} from "./constants.js";

export const createPlannerCard = async (request, response) => {
    try {
        const document = new PlannerCardSchema({
            task: request.body.task,
            description: request.body.description,
            user: request.userId
        });

        const plannerCard = await document.save();
        response.json(plannerCard);
    } catch (error) {
        response.status(500).json({
            message: PLANNER_CARD_CREATION_ERROR
        })
    }
}

export const getAllPlannerCards = async (request, response) => {
    try {
        const plannerCards = await PlannerCardSchema.find({ user: request.userId }).populate("user").exec();
        response.json(plannerCards);
    } catch (error) {
        response.status(500).json({
            message: GET_ALL_PLANNER_CARDS_ERROR
        })
    }
}

export const deletePlannerCard = async (request, response) => {
    try {
        await PlannerCardSchema.findOneAndDelete({ _id: request.body.id });
        response.json({ message: PLANNER_CARD_DELETING_SUCCESS });
    } catch (error) {
        response.status(500).json({
            message: PLANNER_CARD_DELETING_ERROR
        })
    }
}

export const updatePlannerCard = async (request, response) => {
    try {
        await PlannerCardSchema.updateOne({ _id: request.body._id }, {
            task: request.body.task,
            description: request.body.description,
            user: request.userId
        })
        response.json({
            message: PLANNER_CARD_UPDATING_SUCCESS
        })
    } catch (error) {
        response.status(500).json({
            message: PLANNER_CARD_UPDATING_ERROR
        })
    }
}