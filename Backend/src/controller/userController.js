import { UserModal } from "../models/userSchema.js";

//Register new user
export const register = async(req,res,next) =>{
    //Destructuring
   const {name,email,phone,password} = req.body;

    if(!name || !email || !phone || !password){
        return next(res.status(404).json({
            success:false,
            message:"Please fill the required form fields"
        })) 
    }
    //Save user then

    const user = await UserModal.create({name,email,phone,password});

    res.status(201).json({
    success:true,
    message:"User Registered",
    user
    })


}