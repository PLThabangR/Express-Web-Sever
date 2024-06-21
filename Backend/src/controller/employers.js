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

//Update employee
export const updateEmployee = async(req,res,next)=>{

    const  {id} = req.params;
    const {name,email,phone} = req.body

   try{
    let employee = await EmployeeModal.findById(id)

    if(!employee){
        return next(res.status(404).json({
        success:false,
        message:"Employee not found!!"}))
    }

     employee =  await EmployeeModal.findByIdAndUpdate(id,{name,email,phone},{new:true,useFindAndModify:false,runValidators:true})

     res.status(200).json({
        success:true,
        message:"Employee updated",
        employee
     })
   }catch(err){
    console.log(`Cannot update employee due to error ${err}`)
   }
}

export const deleteEmployee=async (req,res,next)=>{
    const {id} = req.params
    let employee = await EmployeeModal.findById(id)

    if(!employee){
        return next(res.status(404).json({
        success:false,
        message:"Employee not found!!"}))
    }
    //We have to use await so the user can be deleted
    await employee.deleteOne();
    res.status(200).json({
        success:true,
        message:`${employee} is deleted`,
        
    })

}
