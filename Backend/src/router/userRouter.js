import express from "express";
import {getUser, login, register} from "../controller/userController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/me",isAuthenticated,getUser)

export {router as userRouter}

