import mongoose from "mongoose";

//Creating a instance of a schema
const employeeSchema = new mongoose.Schema({
    name:{type:String,required:[true,"Name is required"]},
    email:{type:String,required:[true,"Email is required"], unique:true,},
    phone:{type:Number}

})

//Create a model the schema needs a model
export const EmployeeModal = mongoose.model("Employee",employeeSchema)