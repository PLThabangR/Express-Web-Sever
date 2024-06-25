import React from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
import {toast} from "react-hot-toast";

const navbar = () => {
//handle logout
const handlelogout =async(e)=>{
    e.preventDefault()
    try{
        //Sending data to the backend
        const {data} = await axios.get("http://localhost:5000/api/v1/user/logout",
           {withCrendials:true}
        )

            toast.success(data.message)
            

    }catch(e){
        toast.success(e.response.data.message)

    }
}

  return (
    <>
<nav>
<Link to={"/"}> 
    <button className="button is-primary">Home</button>
    </Link>

    <Link onClick={handlelogout}> 
    <button className="button is-primary">Logout</button>
    </Link>

</nav>
    

    
    
    
    </>
  )
}

export default navbar