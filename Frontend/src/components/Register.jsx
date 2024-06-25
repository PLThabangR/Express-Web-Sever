import 'bulma/css/bulma.min.css';
import React, { useState,useContext,useEffect } from 'react';
import axios from 'axios'
import {toast} from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { Context } from './context/AppWrapper';

const Register = () => {
    //navigation
    const navigate = useNavigate();
    //USe states
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [password,setPassword] = useState("");

//handle register
const handleRegister =async(e)=>{
    e.preventDefault()
    try{
        //Sending data to the backend
        const {data} = await axios.post("http://localhost:5000/api/v1/user/register",
            {name,email,phone,password},{withCredentials:true,headers:{"Content-type":"application/json"}}
        )

            toast.success(data.message)
            navigate('/login')

    }catch(e){
        toast.error(e.response.data.message)

    }
}
//Import fileds from context
const {isAuthenticated} = useContext(Context) 

useEffect(()=>{
  if(!isAuthenticated){
    navigate("/login")
}
},[isAuthenticated])

  return (
 <>
    <form className='box' onSubmit={handleRegister}>
        <h1 className='has-text-centered title is-1'>Register</h1>

<div className="field">
  <label className="label">Username</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-success" type="text" onChange={(e)=> setName(e.target.value)} placeholder="Username" value={name} required/>
    <span className="icon is-small is-left">
      <i className="fas fa-user"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </div>

</div>

<div className="field">
  <label className="label">Email</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-success" type="email"  onChange={(e)=> setEmail(e.target.value)} placeholder="Email input" value={email} required/>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-exclamation-triangle"></i>
    </span>
  </div>
 
</div>

<div className="field">
  <label className="label">Phone</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-success" type="text" placeholder="Text input" onChange={(e)=> setPhone(e.target.value)} value={phone} required/>
    <span className="icon is-small is-left">
      <i className="fas fa-phone"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </div>
  
</div>

<div className="field">
  <label className="label">Password</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-success" type="text" placeholder="Text input" onChange={(e)=>setPassword(e.target.value)} value={password} required/>
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
    <button className="button is-primary">Submit</button>
  </div>
  </div>
    </form>
    
    
    </>
  )
}

export default Register