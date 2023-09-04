import PlannerCardSchema from "../models/PlannerCard.js";
import {
    GET_ALL_PLANNER_CARDS_ERROR,
    PLANNER_CARD_CREATION_ERROR,
    PLANNER_CARD_DELETING_ERROR,
    PLANNER_CARD_DELETING_SUCCESS,
    PLANNER_CARD_UPDATING_ERROR,
    PLANNER_CARD_UPDATING_SUCCESS,
    SECTION_DELETING_ERROR,
    SECTION_DELETING_SUCCESS
} from "./constants.js";

export const createPlannerCard = async (request, response) => {
    try {
        const currentDateISO = new Date().toISOString();
        if (request.body._id) {
            const existedPlanner = await PlannerCardSchema.findById({ _id: request.body._id });
            existedPlanner.cards.push({
                task: request.body.task,
                description: request.body.description,
                date: currentDateISO
            });
            const planner = await existedPlanner.save();
            response.json(planner);
        } else {
            const document = new PlannerCardSchema({
                section: request.body.section,
                cards: [{
                    task: request.body.task,
                    description: request.body.description,
                    date: currentDateISO
                }],
                user: request.userId
            });
            const plannerCard = await document.save();
            response.json(plannerCard);
        }
    } catch (error) {
        console.log("error", error)
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
        await PlannerCardSchema.updateOne({
            _id: request.body.sectionId,
        },
            {
                $pull: {
                    cards: {
                        _id: request.body.cardId
                    }
                }
            })
        response.json({ message: PLANNER_CARD_DELETING_SUCCESS });
    } catch (error) {
        response.status(500).json({
            message: PLANNER_CARD_DELETING_ERROR
        })
    };
};

export const updatePlannerCard = async (request, response) => {
    try {
        const currentDateISO = new Date().toISOString();
        await PlannerCardSchema.updateOne(
            {
                '_id': request.body.selectedSectionId,
                'cards._id': request.body.selectedCardId,
                'user': request.userId
            },
            {
                $set: {
                    'cards.$.task': request.body.task,
                    'cards.$.description': request.body.description,
                    'cards.$.date': currentDateISO
                }
            }
        );
        response.json({
            message: PLANNER_CARD_UPDATING_SUCCESS
        })
    } catch (error) {
        response.status(500).json({
            message: PLANNER_CARD_UPDATING_ERROR
        })
    }
}

export const deleteSection = async (request, response) => {
    try {
        console.log("body:", request.body)
        await PlannerCardSchema.findOneAndDelete({ _id: request.body.selectedSectionId });
        response.json({ message: SECTION_DELETING_SUCCESS });
    } catch (error) {
        response.status(500).json({
            message: SECTION_DELETING_ERROR
        })
    }
}