import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Institution from './Institution.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>Institution</h1>
    <Institution name = "OC" DatesOfAttendance = "2020-2024" description = "community college"/>
    <Institution name = "Homeschool" DatesOfAttendance = "2005-2019" description = "Homeschool"/>
  </React.StrictMode>,
)
