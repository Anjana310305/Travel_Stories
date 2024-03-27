import React from 'react'
import './domcss.css';
import { useNavigate } from 'react-router-dom';
const Domestic = () => {
    const navigate=useNavigate();
    const handleseason=()=>{
        navigate('/touristspot')
    }
  return (
    <div className='img'>
    <h2 style={{color:'white'}}>Choose your destination based on the following categories:</h2>
    <div className='cat'>
    <div className="dome">
    <h4 style={{marginLeft:'60px',marginTop:'10px'}}>TYPE OF YOUR TRIP</h4>
    <button style={{marginLeft:'10px',height:'110px'}}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKqT1RTyETrzTPpx0I4pVvvKMabTNNPhBdA&usqp=CAU" width={250} height={100} className='img1'/>
    </button>
    <h4 style={{marginTop:'1px',marginLeft:'10px'}}>Trips are of various types like adventurous,devotional,business,<br/>culinary and more</h4>
    </div>
    <div className='inte'>
    <h4 style={{marginLeft:'60px',marginTop:'10px'}}>MEMBERS OF YOUR TRIP</h4>
    <button style={{marginLeft:'10px',height:'110px'}}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFhf29dpR_rj_wctJuawEQ7_6-2MR0FyQFw&usqp=CAU" width={250} height={100} className='img1'/>
    </button>
    <h4 style={{marginTop:'1px',marginLeft:'10px'}}>Planning a trip with family,loved ones,friends or going on a solo trip?</h4>
    </div>
    <div className='vac'>
    <h4 style={{marginLeft:'60px',marginTop:'10px'}}>VACATION:</h4>
    <button style={{marginLeft:'10px',height:'110px'}} onClick={handleseason}>
    <img src="https://www.ana.co.jp/japan-travel-planner/seasons/img/image_spring_03.jpg" width={250} height={100} className='img1'/>
    </button>
    <h4 style={{marginTop:'1px',marginLeft:'10px'}}>Going on a vaction..?<br/>explore the best destinations based the seasons</h4>
    </div>
    <div className='dest'>
    <h4 style={{marginLeft:'60px',marginTop:'10px'}}>FIXED DESTINATION</h4>
    <button style={{marginLeft:'10px',height:'110px'}}>
    <img src="https://cdn-icons-png.flaticon.com/512/5744/5744322.png" width={250} height={100} className='img1'/>
    </button>
    <h4 style={{marginTop:'1px',marginLeft:'10px'}}>Already having a destination in your mind?<r/>Explore some interesting stuffs about that place</h4>
    </div>
    </div>
    </div>
  )
}

export default Domestic