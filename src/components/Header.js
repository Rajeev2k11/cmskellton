import React from 'react'
import AppBar from '@mui/material/AppBar';
import "../App.css"
import { Link, useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate()
  const handleLogout=()=>{
    localStorage.clear();
   
    navigate('/login')
  }
  return (
    <AppBar >
        <div className='Appbar'>
        <div>LOGO</div>
        <div>
          <Link to='/'>Home</Link>
            <Link to='/add'>Add New</Link>
            <Link to='/list'>Student</Link>
        </div>
        <button onClick={handleLogout}>Login/Logout</button>
        </div>
       
    </AppBar>
  )
}

export default Header