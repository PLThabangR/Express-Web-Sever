import { UserModal } from "../models/userSchema.js";
import jwt from "jsonwebtoken"

//This function will work as a middleware
export const isAuthenticated = async(req,res,next)=>{
    //Destructure token from our cookies
    const {token}= req.cookies;
    //check if the token exist 
    if(!token){
        next(res.status(401).json({
            success:false,
            message:"User not Authenticated!"
        }))
    }
    const secret ='abcdefghijklm'
    //Verify the token and the user id will be stored in the token
    const decoded = await jwt.verify(token,secret);
    //find the user by ID which comes from the decoded
     req.user = await UserModal.findById(decoded.id)
    //Call next to move on to the next function
    next()

}