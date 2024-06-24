import express from "express";
import { createTask, deleteTask, getMyTasks } from "../controller/todoController.js";
import { isAuthenticated } from "../middleware/auth.js";




const router = express.Router();

router.post("/create",isAuthenticated,createTask);
router.get("/tasks",isAuthenticated,getMyTasks);
router.delete("/delete/:id",isAuthenticated,deleteTask);


export {router as taskRouter}
