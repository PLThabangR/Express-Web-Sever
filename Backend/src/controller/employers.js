//CRUD 
//This the controller file to handle routes

import { EmployeeModal } from "../models/employeeSchema.js"

//ADD users
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

//Get USer
export const getEmployee= async(req,res,next) =>{

    //Create a variable
    try{
        const employee = await EmployeeModal.find();
        res.status(200).json({
            success:"true",
            employee
              
        })

    }catch(e){
        console.log("An error accured while trying to find user")
    }


}