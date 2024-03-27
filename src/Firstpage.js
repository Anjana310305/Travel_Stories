import React from 'react'
import Frontcss from './Frontcss.css';
import {Button} from '@mui/material';
import {useNavigate} from "react-router-dom";
const Firstpage = () => {
  const navigate=useNavigate();
  const handlelogin=()=>{
    navigate("/login");
  }
  return (
    <div className='front'>
    <h1 className='title'>Travel Stories</h1>
    <div>
    <img width='350px' height='300px' src='https://i.pinimg.com/originals/02/5f/29/025f29a640db04a067d7a540a7b4d004.gif' className='image'/>
    <br/>
    <h3 className='des'>Create your travel diaries with us!!!</h3><br/><br/>
    <div className='gs'>
    <button onClick={handlelogin}>Get Started</button>
    </div>
    </div>
    </div>
  )
}

export default Firstpage