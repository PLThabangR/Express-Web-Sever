import mongoose from 'mongoose'

const dbConnection = () => {
  const MONGO_URI="mongodb+srv://thabang:thabang@backend1.ex12spp.mongodb.net/?retryWrites=true"
        mongoose.connect(MONGO_URI,
            {dbName:"BACKEND_TUT"}
        ).then(()=>{
            console.log("Succesfully Connected to database")
        }).catch(err =>{
            console.log(`Error occured while connecting to database ${err}`)
        })
     

    
}

export default dbConnection



//mongodb+srv://thabang:thabang@backend1.ex12spp.mongodb.net/?retryWrites=true&w=majority&appName=backend1