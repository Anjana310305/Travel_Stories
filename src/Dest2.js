import React from 'react'
import './Expcss.css'
import { useNavigate } from 'react-router-dom'
const Explore = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/Checkout')
    }
  return (
    <div className='back'>
    <h1 className='txt'><a style={{textDecoration:'none',color:'black'}}href='./home'>Travel Stories</a> > Explore</h1>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBCp1XPzFjYtkUhWzumbhXMp1jrURhIYD_Q&usqp=CAU' className='imgs'/><br/>
    <div className='tab'>
    <h5 width={200}>For 6 Nights and 5 Days,</h5>
    <br/>
    <table className='det'>
    <tr>
    <td className='td'width={200}>Transport:</td>
    <td className='td'width={200}>AirAsia Airlines</td>
    <td className='td'>Rs.10000 (Round-way)</td>
    </tr>
    <tr>
    <td className='td'width={200}>Stay:</td>
    <td className='td'>Hotel Jungle Stay</td>
    <td className='td'>Rs.35000</td>
    </tr>
    <tr>
    <td className='td' width={200}>Other Expenses:</td>
    <td className='td' width={200}>Cabs,Insurance,etc..</td>
    <td className='td'>Rs.15000</td>
    </tr>
    <tr>
    <td className='td' width={200}></td>
    <td className='td' width={200}>Net Package: </td>
    <h5>Rs.60,000</h5>
    </tr>
    </table>
    <br/>
    <div className='btn'>
    <button onClick={handleClick}>BOOK NOW!!</button>
    </div>
    </div>
    </div>
  )
}

export default Explore