import mongoose from "mongoose"

//Create a schema
const TodoSchema = new mongoose.Schema({
    title:{type:String,
        required:[true,"Title is required"],
        minlength: [3,"Title must contain more than 2 characters"]
        },
    description:{type:String,
         required:[true,"Description is required"],
        minlength: [4,"Description must contain more than 3 characters"]
         },
    createdBy:{
        type:mongoose.Schema.ObjectId,
    }
    
})

//Create a model the schema needs a model
export const TodoModal = mongoose.model("Task",TodoSchema)