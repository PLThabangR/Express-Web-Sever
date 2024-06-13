import express from "express";


const app = express();
//Enable express json body parser Middleware
app.use(express.json())
const port = process.env.PORT || 5000
const courses = [
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},
    {id:4,name:'course4'}
]

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.get('/api/courses',(req,res)=>{
    res.send(courses)
})

app.get('/api/courses/:id',(req,res)=>{
    const id =parseInt(req.params.id)
    console.log(typeof(id))
    const course  = courses.find(c => c.id === id )
   if(!course) res.status(400).send("Course is not found")

    res.send(course)
})
//Working with post request
app.post('/api/courses',(req,res) =>{
   const  {courseName} = req.body

   //Input validation
   if(!courseName || courseName.length<3 ){
    res.status(400).send("Name required and length ")
   }

    const course ={
        id:courses.length +1,
        name:courseName

    }

    courses.push(course)
    res.send(course)
})



function start(){

    app.listen(port, ()=>{
        console.log(`App listening in port ${port}` )
    })
}

//Start server
start()