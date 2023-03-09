import React, { useRef } from 'react'
import TextField from "@mui/material/TextField";
import Form from './Form';
import { useNavigate } from 'react-router';


function Login() {
    const email = useRef()
    const password = useRef()
    const getEmail = localStorage.getItem("email")
    const getPassword = localStorage.getItem("password")
    const navigate = useNavigate()

    const handleLogin=()=>{
        if(email.current.value==="xyz@gmail.com"&&password.current.value==="123456"){
            localStorage.setItem("email","xyz@gmail.com");
            localStorage.setItem("password","123456")
        }
    }
  return (
    <div> 
        {
        getEmail&&getPassword ?navigate('/add'):
        <form className="form" onSubmit={handleLogin}>
        <div className="field">
        <input
          type="text"
          ref={email}

        />
        </div>
     
        <div className="field">
        <input
         type="password"
          ref={password}
        />
        </div>
        
        <button className="add">Login</button>
        
      </form>
        }
        
    </div>
  )
}

export default Login