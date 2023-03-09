import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router";


function Form(props) {

  const [state, setState]= useState({
    name:"",
    email:"",
    contact:"",
    address:""
  })
  const navigate = useNavigate();
  const submithandler = (e) => {
    
    e.preventDefault();
    if (state.name === "" || state.email === "" || state.contact=== "" || state.address=== "") {
        alert("ALl the fields are mandatory!");
        return;
      }
    props.addList({...state})
    setState({...state,name:"",
    email:"",
    contact:"",
    address:""})
     navigate("/list")
  };
  
  return (
    <div className="ui main">
      <h2>Add Student</h2>
      <form className="form" onSubmit={submithandler}>
        <div className="field">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={state.name}
          onChange={(e) => setState({...state, name:e.target.value})}
        />
        </div>
     
        <div className="field">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={state.email}
          onChange={(e) => setState({...state, email:e.target.value})}
        />
        </div>
        <div className="field">
        <TextField
          id="outlined-basic"
          label="contact"
          variant="outlined"
          value={state.contact}
          onChange={(e) => setState({...state, contact:e.target.value})}
        />
        </div>
        <div className="field">
        <TextField
          id="outlined-basic"
          label="address"
          variant="outlined"
          value={state.address}
          onChange={(e) => setState({...state, address:e.target.value})}
        />
</div>
        <button className="add">Add</button>
        
      </form>
    </div>
  );
}

export default Form;
