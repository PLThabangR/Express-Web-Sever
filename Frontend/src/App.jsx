import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Test from './components/test'
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from  "./components/home";
import Login from "./components/Login";
import Register from './components/Register';

function App() {
  const [count, setCount] = useState(0)

  return (
  <>


<Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Login/>} path="/login"/>
      <Route element={<Register/>} path="/register"/>
    </Routes>
  </>
  )
}

export default App
