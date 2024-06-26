import {useContext} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
import {toast} from "react-hot-toast";
import { Context } from './context/AppWrapper';

const Navbar = () => {
       //import authentication context
const {isAuthenticated,setIsAuthenticated} = useContext(Context) 
//handle logout
const handlelogout =async(e)=>{
    e.preventDefault()
    try{
        //Sending data to the backend to logout user
        const {data} = await axios.get("http://localhost:5000/api/v1/user/logout",
           {withCredentials:true}
        );

            toast.success(data.message)
            //Set is authenticated to false because the user has looged out
            setIsAuthenticated(false)
    }catch(e){
        toast.error(e.response.data.message)

    }
}

  return (
    <>
{isAuthenticated &&(
    <nav>
    <Link to={"/"}> 
    <button className="button is-primary is-normal">Home</button>
    </Link>

    <Link to={"/login"} onClick={handlelogout}> 
    <button className="button is-primary is-normal">Logout</button>
    </Link>
    </nav>
    )
}
  
    </>
  )
}

export default Navbar