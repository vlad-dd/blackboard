import mongoose from "mongoose";

const PlannerCardSchema = new mongoose.Schema({
    section: {
        type: String,
        required: true
    },
    cards: [
        {
            task: {
                type: String,
                required: true,
            },
            description: {
                type: String,
            },
            date: {
                type: String
            }
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model("PlannerCard", PlannerCardSchema);