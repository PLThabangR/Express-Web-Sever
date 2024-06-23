import express, { urlencoded } from 'express';
import cors from "cors";
import {config} from "dotenv"
import dbConnection from "./database/dbConnection.js";
import { employeeRouter } from './router/employees/employeeRouter.js';
import { userRouter } from './router/userRouter.js';

//instance of express
const app = express();
//Setup dotenv
config({path:"./config/config.env"})
//Using in built middleware
app.use(express.json())
app.use((express.urlencoded({extended:true})))

//Using third party middlewaere 
app.use(cors({
    origin: ["http://localhost:5173","http://localhost:5174"],
    methods:["GET","POST","DELETE","PUT"],
    credentials:true
}))



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
//Register user route
app.use("/api/v1/user",userRouter)

//Calling  then function to start application
start()

