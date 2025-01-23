import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
            unique: true
        },

        pwd: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);