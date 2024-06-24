import 'bulma/css/bulma.min.css';
import React, { useState } from 'react';

const Register = () => {
    //USe states
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [password,setPassword] = useState("");

  return (
    <>

    <form className='box'>
        <h1 className='has-text-centered title is-1'>Register</h1>

<div className="field">
  <label className="label">Username</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-success" type="text" onChange={(e)=> setName(e.target.value)} placeholder="Username" value={name}/>
    <span className="icon is-small is-left">
      <i className="fas fa-user"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </div>
  <p className="help is-success">This username is available</p>
</div>

<div className="field">
  <label className="label">Email</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-danger" type="email"  onChange={(e)=> setEmail(e.target.value)} placeholder="Email input" value={email}/>
    <span className="icon is-small is-left">
      <i className="fas fa-envelope"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p className="help is-danger">This email is invalid</p>
</div>

<div className="field">
  <label className="label">Phone</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-success" type="text" placeholder="Text input" onChange={(e)=> setPhone(e.target.value)} value={phone}/>
    <span className="icon is-small is-left">
      <i className="fas fa-phone"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </div>
  <p className="help is-success">This username is available</p>
</div>

<div className="field">
  <label className="label">Password</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input is-success" type="text" placeholder="Text input" onChange={(e)=>setPassword(e.target.value)} value={password}/>
    <span className="icon is-small is-left">
      <i className="fas fa-password"></i>
    </span>
    <span className="icon is-small is-right">
      <i className="fas fa-check"></i>
    </span>
  </div>
  <p className="help is-success">This password is available</p>
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