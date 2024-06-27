import {createContext,useState} from 'react'


//Create context for authentication and set value to false
 export const Context = createContext({
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


export default AppWrapper
