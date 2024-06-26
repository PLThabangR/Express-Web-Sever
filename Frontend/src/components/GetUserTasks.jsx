
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DeleteTask from './DeleteTask';
import { Link } from 'react-router-dom';

const GetUserTasks = () => {
    const [tasks,setTasks] = useState([]);
    //Get usr tasks
const getUserTasks = async ()=>{

    try{
      const {data} = await axios.get("http://localhost:5000/api/v1/task/tasks",{
        withCredentials:true});
      //if data is fetched successfully set user
      //console.log(data.task)
  
      //data.task.forEach(a=>{
        //console.log(a.title)
      //})
  
      
      setTasks(data.task)
      console.log(tasks)
  
     
    }catch(e){
      setTasks([])
      console.log("Cannot fetch tasks")
     
    }
  }

  //Allow only authenticated user in the home component
useEffect(()=>{     
    //Call the getTask function
 //  getUserTasks()
    console.log("call me when the is change")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[tasks])
    
  return (
    <>

{tasks.length >0? (
      tasks.map(element =>{
        return(
          <div className="card" key={element._id}>
          <div className="card-content">
          <p className="card-header-title">{element.title}</p>
            <div className="content">
              {element.description}
            </div>
          </div>
          <div className="card">
          <footer className="card-footer">
          <Link to={`/updateTask/${element._id}`}><a  className="card-footer-item">Edit</a></Link>
            <DeleteTask userID={element._id}/>
          </footer>
        </div>
        </div>
        )
      })
        
    ):(  <h1 className='has-text-centered title is-3'>No Task</h1>)}


    </>
  )
}

export default GetUserTasks