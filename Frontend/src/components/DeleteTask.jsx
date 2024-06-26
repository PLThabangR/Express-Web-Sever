import axios from 'axios';
import {toast} from "react-hot-toast";
import PropTypes  from "prop-types"
const DeleteTask = (props) => {
//Delete Task 
const deleteTask=async()=>{
    try{
        const {data}= await axios.delete(`http://localhost:5000/api/v1/task/delete/${props.userID}`,
            {
            withCredentials:true
        })
       
        toast.success(data.message)
    }catch(e){
        toast.error(e.response.data.message);
    }
   }

  return (
    <>
    
    <h1>{props.userID}</h1>
    <a onClick={deleteTask} className="card-footer-item">Delete</a>
    </>
  )
}

DeleteTask.propTypes={
    userID:PropTypes.node,
}

export default DeleteTask