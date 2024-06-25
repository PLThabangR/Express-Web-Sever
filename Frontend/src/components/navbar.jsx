import {useContext} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
import {toast} from "react-hot-toast";
import { Context } from './context/AppWrapper';

const Navbar = () => {
       //import authentication context
const {setIsAuthenticated} = useContext(Context) 
//handle logout
const handlelogout =async(e)=>{
    e.preventDefault()
    try{
        //Sending data to the backend
        const {data} = await axios.get("http://localhost:5000/api/v1/user/logout",
           {withCredentials:true}
        );

            toast.success(data.message)
            //Set is authenticated to false because the user has looged out
            setIsAuthenticated(false)
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

    <Link to={"/login"} onClick={handlelogout}> 
    <button className="button is-primary">Logout</button>
    </Link>

</nav>
    

    
    
    
    </>
  )
}

export default Navbar