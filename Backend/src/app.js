import express from 'express'

//instance of express
const app = express();
//Declare variables
const port = 5000

function start(){
    app.listen(port,  ()=>{
        console.log(`Server running on port ${port}`)
    })
}

//Calling start function 
start()