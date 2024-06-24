import express from "express";
import { createTask } from "../controller/todoController.js";
import { isAuthenticated } from "../middleware/auth.js";



const router = express.Router();

router.post("/create",isAuthenticated,createTask);


export {router as taskRouter}
