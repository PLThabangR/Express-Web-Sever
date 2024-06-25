import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Test from './components/test'
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from  "./components/home";
import Login from "./components/Login";
import Register from './components/Register';
import { Toaster } from 'react-hot-toast';
import { Context } from './components/context/AppWrapper';
import axios from 'axios';

function App() {
 //Find if user is logged in using context

 const {isAuthenticated,setIsAuthenticated,user,setUser} = useContext(Context) 
 useEffect(()=>{
  
const getUser = async ()=>{

  try{
    const {data} = await axios.get("http://localhost:5000/api/v1/user/me",{
      withCredentials:true
    })
    //if data is fetched successfully set user
    setUser(data.user);
    setIsAuthenticated(true);


  }catch(e){
    setIsAuthenticated(false);
    setUser({});
  }
}
//Call this function
getUser()
 },[isAuthenticated])
  return (
  <>
  <div className="content"> 
     
     

<Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Login/>} path="/login"/>
      <Route element={<Register/>} path="/register"/>
    </Routes>
    <Toaster/>
    </div>

  </>
  )
}

export default App
