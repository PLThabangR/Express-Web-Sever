import express, { urlencoded } from 'express';
import cors from "cors";
import dbConnection from "./database/dbConnection.js";

//instance of express
const app = express();

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

//Calling start function 
start()

