import {TodoModal} from "../models/todoSchema.js";


export const createTask=async(req,res,next)=>{
    //Destructure title and description
    const {title,description} = req.body
    //Get user id from the req.body becuase user has already loggedin
    const createdBy= req.user._id;
    //Check if all fields are completed
    if(!title || !description){
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

//Get my ask
export const getMyTasks = async (req,res,next)=>{
    //Destructure ID
    const createdBy =  req.user._id
    //find signed in  user task by ID
    //other method
   // const task  = await TodoModal.find({createdBy:req.user._id})
    const task  = await TodoModal.find({createdBy})

    res.status(200).json({
        success:true,
        task
    })
}

//Update tasks
export const updateTask=async (req,res,next)=>{
    const {title,description} = req.body
    let task = await TodoModal.findById(req.params.id)
    if(!task){
        return next(res.status(404).json({
        success:false,
        message:"Task not found!!"}))
    }

   task =  await TodoModal.findByIdAndUpdate(req.params.id,{title,description},{new:true,runValidators:true,useFindAndModify:false});

   res.status(200).json({
    success:true,
    message:"Task updated",
    task
   })
}



export const deleteTask=async (req,res,next)=>{
    //destructure task ID
    //const {id} = req.params
    //other method
   // let task = TodoModal.findById({id})
   const task = await TodoModal.findById(req.params.id)

    if(!task){
        return next(res.status(404).json({
        success:false,
        message:"Task not found!!"}))
    }
    //We have to use await so the user can be deleted
    await task.deleteOne();
    res.status(200).json({
        success:true,
        message:"task is deleted",
        
        
    })

}