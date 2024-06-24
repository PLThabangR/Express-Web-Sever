import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from  'react-router-dom'
import AppWrapper from './components/context/AppWrapper.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppWrapper>
    <App />
    </AppWrapper>
   
    </BrowserRouter>
  </React.StrictMode>,
)
