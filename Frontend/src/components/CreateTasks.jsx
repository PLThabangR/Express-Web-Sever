/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
import axios from 'axios';

const CreateTasks = () => {
     //USe states variable
   const [title,setTitle] = useState("");
   const [description,setDescription] = useState("");

  return (
    <>
    <div>
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
    
    
    </>
  )
}

export default CreateTasks