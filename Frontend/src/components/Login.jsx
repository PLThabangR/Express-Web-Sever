import 'bulma/css/bulma.min.css';
import React, { useState } from 'react';
import axios from 'axios'
import {toast} from "react-hot-toast";
import { Navigate,useNavigate } from 'react-router-dom';

const Login = () => {
    //navigation
    const navigate = useNavigate();
    //USe states
    const [email,setEmail] = useState("");
   
    const [password,setPassword] = useState("");

//handle register
const handleRegister =async(e)=>{
    e.preventDefault()
    try{
        //Sending data to the backend
        const {data} = await axios.post("http://localhost:5000/api/v1/user/login",
            {email,password},{withCrendials:true,headers:{"Content-type":"application/json"}}
        )

            toast.success(data.message)
            navigate('/')

    }catch(e){
        toast.success(e.response.data.message)

    }
}

  return (
 <>
    <form className='box' onSubmit={handleRegister}>
        <h1 className='has-text-centered title is-1'>Login</h1>



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

export default Login