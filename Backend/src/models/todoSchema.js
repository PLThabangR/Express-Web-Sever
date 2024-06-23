import mongoose from "mongoose"

//Create a schema
const TodoSchema = new mongoose.Schema({
    title:{type:String,
        required:[true,"Title is required"],
        minlength: [4,"Title must contain more than 3 characters"]
        },
    description:{type:String,
         required:[true,"Description is required"],
        minlength: [10,"Description must contain more than 9 characters"]
         },
    
})

//Create a model the schema needs a model
export const TodoModal = mongoose.model("Todo",TodoSchema)