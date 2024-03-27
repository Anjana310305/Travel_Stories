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
    <img src='https://www.easytravelrecipes.com/wp-content/uploads/2022/01/honeymoon-places-easytravelrecipes.jpg' className='imgs'/><br/>
    <div className='tab'>
    <h5 width={200}>For 5 Nights and 4 Days,</h5>
    <br/>
    <table className='det'>
    <tr>
    <td className='td'width={200}>Transport:</td>
    <td className='td'width={200}>IndiGo Airlines</td>
    <td className='td'>Rs.16000 (Round-way)</td>
    </tr>
    <tr>
    <td className='td'width={200}>Stay:</td>
    <td className='td'>Hotel Beach Bay</td>
    <td className='td'>Rs.20000</td>
    </tr>
    <tr>
    <td className='td' width={200}>Other Expenses:</td>
    <td className='td' width={200}>Cabs,Insurance,etc..</td>
    <td className='td'>Rs.14000</td>
    </tr>
    <tr>
    <td className='td' width={200}></td>
    <td className='td' width={200}>Net Package: </td>
    <h5>Rs.50,000</h5>
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