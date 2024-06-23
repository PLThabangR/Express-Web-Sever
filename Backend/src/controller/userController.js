import { UserModal } from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

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
    //Check if user already exists
    const isUser = await UserModal.findOne({email});
    if(isUser){
        return next(res.status(400).json({
            success:false,
            message:"User already Exists!!"
        }))
    }
    //hash the password then pass the password as object
    const hashedPassword = await bcrypt.hash(password,10)
    //Save user then
    const user = await UserModal.create({name,email,phone,password:hashedPassword});

    res.status(201).json({
    success:true,
    message:"User Registered",
    user
    })
}

//Login user
export const login=async(req,res,next)=>{
    const {email,password} = req.body

    if(!email || !password){
        return next(res.status(400).json({
            success:false,
            message:"Please fill the required form fields"
        })) 
    } 

    //Check if user exits
    const user = await UserModal.findOne({email});
    if(!user){
        return next(res.status(400).json({
            success:false,
            message:"Invalid password or email"
        }))
    }

    //Compare password with hashed
    const isPasswordMatched = await bcrypt.compare(password,user.password);
    if(!isPasswordMatched){
        return next(res.status(400).json({
            success:false,
            message:"Invalid Password or Email"
        }))
    }
    //Create a token for this user using the user ID 
    // expiresIn: 60 * 60
    //expiresIn: '1h'
    //This cookie wil expire after seven days
    const token = await jwt.sign({id:user._id},'abcdefghijklm',{expiresIn:'7d'})

//Creating a cookie
    res.status(200).cookie("token",token,{
        httpOnly:true,
        expires: new Date(Date.now()+7*24*60*60*1000)
    }).json({
        success:true,
        message:"USer logged in",
        user:{
            name:user.name,
            email:user.email,
            phone:user.phone
        },
        token
    })
    
}

//Get user

export const getUser= async (req,res,next)=>{



}