import {createContext,useState,useContext} from 'react'


//Create context for authentication and set value to false
 const Context = createContext({
  isAuthenticated:false
})

//Create a component to use the context
export const AppWrapper=({children})=>{
const [isAuthenticated,setIsAuthenticated] = useState(false);
const [user,setUser]=useState({})

return (
<Context.Provider  value={{isAuthenticated,setIsAuthenticated,user,setUser}}>

{children}

</Context.Provider>

)
}

export const useAuthenticationContext = ()=> useContext(Context)
export default AppWrapper
