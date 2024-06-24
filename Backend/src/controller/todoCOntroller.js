import {TodoModal} from "../models/todoSchema.js";


export const createTask=async(req,res,next)=>{
    const {title,description} = req.body

    const createdBy= req.user._id;

    if(!title || description){
        return next(res.status(404).json({
            success:false,
            message:"Please provide both title and description"
        }))
    }

    //Creat new task
    const task = await TodoModal.create({title,description,createdBy});
    res.status(200).json({
        succes: true,
        message:"Task Created",
        task
    })

}