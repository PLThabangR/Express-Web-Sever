//CRUD 
//This the controller file to handle routes

import { EmployeeModal } from "../models/employeeSchema.js"

export const addEmployee = async (req,res,next)=>{
const {name,email,phone } = req.body

if(!name || !email || !phone){
    return next(res.status(400).json({
        success:false,
        message:"Please provide all details"
    }))
}

//Create new employee
const employee = await EmployeeModal.create({name,email,phone});
    res.status(201).json({
         success:true,
        message:"Employee created!!",
        employee
    }) 

}