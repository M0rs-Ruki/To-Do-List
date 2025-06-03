
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({

    title: {
        type:String,
        required: true,
    },
    completed: {
        tyepe: Boolean,
        default: false,
    }

},{ timestamps: true })


export const ToDo = mongoose.model("ToDo", todoSchema)