import 'bulma/css/bulma.min.css';
import { useState,useContext } from 'react';
import axios from 'axios'
import {toast} from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { Context } from './context/AppWrapper';
import Navbar from './navbar';

const Login = () => {
    //Use context
    const {isAuthenticated,setIsAuthenticated,user,setUser} = useContext(Context) 
    //navigation
    const navigate = useNavigate();
    //USe states
    const [email,setEmail] = useState("");
   
    const [password,setPassword] = useState("");

//handle logn
const handleLogin =async(e)=>{
    e.preventDefault()
    try{
        //Sending data to the backend
        const {data} = await axios.post("http://localhost:5000/api/v1/user/login",
            {email,password},{withCredentials:true,headers:{"Content-type":"application/json"}}
        )
       

            toast.success(data.message)
            //Set authentication 
            setIsAuthenticated(true)
    }catch(e){
        toast.success(e.response.data.message)
    }   
}

if(isAuthenticated){
    console.log("This user is authenticated")
    navigate('/')
 }

  return (
 <>
 <Navbar/>
    <form className='box' onSubmit={handleLogin}>
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
    <button className="button is-primary">Login</button>
  </div>
  </div>
    </form>
    
    
    </>
  )
}

export default Login