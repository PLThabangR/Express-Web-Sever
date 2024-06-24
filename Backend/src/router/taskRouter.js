import express from "express";
import { createTask, getMyTasks } from "../controller/todoController.js";
import { isAuthenticated } from "../middleware/auth.js";



const router = express.Router();

router.post("/create",isAuthenticated,createTask);
router.get("/tasks",isAuthenticated,getMyTasks);


export {router as taskRouter}
