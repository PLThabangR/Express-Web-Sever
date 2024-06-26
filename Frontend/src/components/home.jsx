import {useContext, useEffect,useState} from 'react'
import Navbar from './navbar';
import 'bulma/css/bulma.min.css';
import { Context } from './context/AppWrapper';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GetUserTasks from './GetUserTasks';
import CreateTasks from './CreateTasks';


const Home = () => {
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
        <CreateTasks/>
     
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