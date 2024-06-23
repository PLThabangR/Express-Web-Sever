import mongoose from "mongoose"

//Create a schema
const UserSchema = new mongoose.Schema({
    name:{type:String,
        required:[true,"Name is required"],
        minlength: [3,"Name must contain more than 2 characters"],
        maxlength:[32,"Name cannot exceed 32 characters"]
    },
    email:{type:String,required:[true,"Email is required"], unique:true,},
    phone:{type:Number}
})

//Create a model the schema needs a model
export const UserModal = mongoose.model("Users",UserSchema)