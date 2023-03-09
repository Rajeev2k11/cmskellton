import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Avatar from "./avatar.png"
import { Link } from 'react-router-dom';

function StudentCard(props) {
    const { name, email,contact,address,id } = props.studentInfo;
  return (
    <div>    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img" 
        height="160"
        image={Avatar}
        alt="Profile pic"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Address: {address}<br/>
          Contact Number: {contact}<br/>
          Email:{email}<br/>
        </Typography>
        <DeleteIcon onClick={()=>props.handleClick(id)}/>
        <Link to={{pathname:"/update", state:props.studentInfo}}>
        <EditIcon onClick={()=>props.handleClick(id)}/>
        </Link>
      </CardContent>
    </CardActionArea>
  </Card></div>
  )
}

export default StudentCard