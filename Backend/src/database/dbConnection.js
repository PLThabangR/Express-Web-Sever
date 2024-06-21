import mongoose from 'mongoose'

const dbConnection = () => {
  
        mongoose.connect("mongodb+srv://thabang:thabang@backend1.ex12spp.mongodb.net/?retryWrites=true",
            {dbName:"BACKEND_TUT"}
        ).then(()=>{
            console.log("Succesfully Connected to database")
        }).catch(err =>{
            console.log(`Error occured while connecting ${err}`)
        })
     

    
}

export default dbConnection



//mongodb+srv://thabang:thabang@backend1.ex12spp.mongodb.net/?retryWrites=true&w=majority&appName=backend1