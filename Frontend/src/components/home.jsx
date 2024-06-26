import {useContext, useEffect,useState} from 'react'
import Navbar from './navbar';
import 'bulma/css/bulma.min.css';
import { Context } from './context/AppWrapper';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GetUserTasks from './GetUserTasks';


const Home = () => {
  //use states
   //USe states variable
   const [title,setTitle] = useState("");
  
   
   const [description,setDescription] = useState("");
    //navigation
const navigate = useNavigate()
const {isAuthenticated} = useContext(Context) 
//Allow only authenticated user in the home component
useEffect(()=>{
//Check if the user is authenticated
  if(!isAuthenticated){
    navigate("/login")
}

},[isAuthenticated])



  return (
    <>
   
        <div className="container"> 
        <Navbar/>
    <div className='fixed-grid'>
    <div className="grid">
        <div className='has-4-cols'>
        <form className='box'>
        <h1 className='has-text-centered title is-1'>Create Task</h1>
<div className="field">
  <label className="label">Title</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-success is-small" type="text"  onChange={(e)=> setTitle(e.target.value)} placeholder="Title" value={title} required/>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-exclamation-triangle"></i>
    </span>
  </div>
 
</div>


<div className="field">
  <label className="label">Description</label>
  <div className="control has-icons-left has-icons-right">
    <textarea className="textarea is-success is-small"  placeholder="Description" onChange={(e)=>setDescription(e.target.value)} value={description} required></textarea>
    <span className="icon is-small is-left">
      <i className="fas fa-password"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </div>
</div>

<div className="field is-grouped">
  <div className="control">
    <button className="button is-primary is-small">Create Task</button>
  </div>
  </div>
    </form>
     
        </div>
        <div className="has-8-cols">
       

    <GetUserTasks/>

        </div>
    </div>
    </div>
          </div>



    </>
  )
}

export default Home