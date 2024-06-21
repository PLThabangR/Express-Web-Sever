import express, { urlencoded } from 'express'

//instance of express
const app = express();

//Using middleware
app.use(express.json())
app.use((express.urlencoded({extended:true})))


//Declare variables
const port = 5000

function start(){
    app.listen(port,  ()=>{
        console.log(`Server running on port ${port}`)
    })
}

//Calling start function 
start()