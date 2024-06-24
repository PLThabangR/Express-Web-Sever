import express, { urlencoded } from 'express';
import cors from "cors";
import {config} from "dotenv";
import cookieParser from 'cookie-parser'
import dbConnection from "./database/dbConnection.js";
import { employeeRouter } from './router/employees/employeeRouter.js';
import { userRouter } from './router/userRouter.js';
import { taskRouter } from './router/taskRouter.js';

//instance of express
const app = express();
//Setup dotenv
config({path:"./config/config.env"})
//Using in built middleware
app.use(express.json())
app.use((express.urlencoded({extended:true})))

//Using third party middlewaere 
//USe cors to connect fronend and backend
app.use(cors({
    origin: ["http://localhost:5173","http://localhost:5174"],
    methods:["GET","POST","DELETE","PUT"],
    credentials:true
}))
//Use cookie parser middleware
app.use(cookieParser())



//Declare variables
const port = 5000

function start(){
    //Calling the DB function
    dbConnection()
    app.listen(port,  ()=>{
        console.log(`Server running on port ${port}`)
    })
}

//Use the routes
app.use(employeeRouter)
//user route
app.use("/api/v1/user",userRouter)
//Task route
app.use("/api/v1/task",taskRouter)

//Calling  then function to start application
start()

