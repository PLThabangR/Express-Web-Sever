import React,{useContext} from 'react'
import Navbar from './navbar';
import 'bulma/css/bulma.min.css';
import { Context } from './context/AppWrapper';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    //navigation
const navigate = useNavigate()
const {isAuthenticated} = useContext(Context) 
//Allow only authenticated user in the home component
if(!isAuthenticated){
    navigate("/")
}

  return (
    <>

        <div className="box"> 
        <Navbar/>
          </div>



    </>
  )
}

export default Home