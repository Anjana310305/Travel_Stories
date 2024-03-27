import React, {ChangeEvent, useState } from 'react';
import Hotelcss from './Hotelcss.css'
import Typography from '@mui/material/Typography';
import Hotelres from './Hotelres'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Final from './Final';
import { useNavigate } from 'react-router-dom';
const SearchForm = ({ onSearch }) => {
  const [isShown, setIsShown] = useState(false);
  const handleSearch = event => {
    setIsShown(current => !current);
  };
  const [inputText, setInputText] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const [inputCheckin, setcheckin] = useState("");
  const handleCheckin = (e: ChangeEvent<HTMLInputElement>) => {
    setcheckin(e.target.value);
  };
  const [inputCheckout, setcheckout] = useState("");
  const handleCheckout = (e: ChangeEvent<HTMLInputElement>) => {
    setcheckout(e.target.value);
  };
  const [inputRooms, setrooms] = useState(0);
  const handleRooms = (e: ChangeEvent<HTMLInputElement>) => {
    setrooms(e.target.value);
  };
  const [inputGuests, setguests] = useState(0);
  const handleGuests= (e: ChangeEvent<HTMLInputElement>) => {
    setguests(e.target.value);
  };
  const [inputPrice, setprice] = useState(0);
  const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setprice(e.target.value);
  };
  
  return (
    <div className='main'>
    <table>
    <tbody>
    <tr>
    <td><Avatar className='img1'
    alt="Remy Sharp"
    src="https://img.freepik.com/premium-vector/hotel-logo-design_423075-16.jpg"
    sx={{ width: 90, height: 90 }}
  />
    </td>
    <td><h1 className='align' ><a href='./Home' style={{textDecoration:'none',color:'black'}}>Travel_Stories </a> > Online Ticket Bookings</h1></td></tr></tbody></table>
      <table className='tab1'>
      <td width={230}>LOCATION:</td>
      <td width={230}>CHECK-IN</td>
      <td width={230}>CHECK-OUT</td>
      </table><br/>
      <div className='div1'>
      <input className='inpplace'
        type="text"
        placeholder="Place"
        value={inputText}
        onChange={handleChange}
      />
      <input className='inpplace'
      type="date"
      placeholder="Check-in"
      value={inputCheckin}
      onChange={handleCheckin}
      />
      <input className='inpplace'
      type="date"
      value={inputCheckout}
      placeholder="Check-out"
      onChange={handleCheckout}
      />
      </div>
      <br/><br/>
      <table className='tab1'>
      <td width={230}>ROOMS:</td>
      <td width={230}>GUESTS:</td>
      <td width={230}>PRICE PER NIGHT:</td>
      </table>
      <div className='div1'>
      <br/>
      <input className='inpplace'
        type="number"
        placeholder="Rooms"
        value={inputRooms}
        onChange={handleRooms}
      />
      <input className='inpplace'
        type="number"
        placeholder="Guests"
        value={inputGuests}
        onChange={handleGuests}
      />
      <input className='inpplace'
        type="number"
        placeholder="Price"
        value={inputPrice}
        onChange={handlePrice}
      />
      </div>
      <div className='find'>
      <button onClick={handleSearch}>Search</button>
      </div>
      <div className='result'>
      {isShown && (
        <div>
          <h2>SEARCH RESULTS:</h2>
        </div>
      )}
      {isShown && <Boxed/>}
      </div>
    </div>
  );
  
};
function Boxed() {
  const navigate=useNavigate();
  const[hotel,setHotel]=useState("");
  const[spot,setSpot]=useState("");
  const[amt,setAmt]=useState(0);
  const handlebook=()=>{
      navigate('/Checkout')
  }
  const [value, setValue] = React.useState(4);
  return (
    <div>
    <div>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 900,
          height: 128,
        },
      }}
      >
      <Paper elevation={3}>
 
      <table>
      <tbody>
      <tr>
      <td width={50}>
      <img className='hotelpic' src="data:image/jpeg;base64,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"/>
      </td>
      <td width={140}><h5 className='txt'> Luxury Stay Inn</h5></td>
      <td width={120}><h5 className='txt'>Panjim,Goa</h5></td>
      <td width={120}><h5 className='txt'>₹ 7,286<br/>Per Night</h5></td>
      <td width={150}>
      <Box
      sx={{
        '& > legend': { mt: 2 },
      }}>
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly />
      </Box>
      </td>
      
      <td><button onClick={handlebook}>Book Now!</button></td>
      </tr>
      </tbody>
      </table>
      </Paper>
      </Box>
      </div>
    
    <div>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 900,
          height: 128,
        },
      }}
      >
      <Paper elevation={3}>
 
      <table>
      <tbody>
      <tr>
      <td width={50}>
      <img className='hotelpic' src="data:image/jpeg;base64,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"/>
      </td>
      <td width={120}><h5 className='txt'>Resort Rio</h5></td>
      <td width={120}><h5 className='txt'>Arpora,Goa</h5></td>
      <td width={120}><h5 className='txt'>₹ 8,886<br/>Per Night</h5></td>
      <td width={150}>
      <Box
      sx={{
        '& > legend': { mt: 2 },
      }}>
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly />
      </Box>
      </td>
      
      <td><button onClick={handlebook}>Book Now!</button></td>
      </tr>
      </tbody>
      </table>
      </Paper>
      </Box>
      </div>
    
    <div>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 900,
          height: 128,
        },
      }}
      >
      <Paper elevation={3}>
 
      <table>
      <tbody>
      <tr>
      <td width={50}>
      <img className='hotelpic' src="data:image/jpeg;base64,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"/>
      </td>
      <td width={120}><h5 className='txt'>Silver Heritage</h5></td>
      <td width={120}><h5 className='txt'>Benalium,Goa</h5></td>
      <td width={120}><h5 className='txt'>₹ 9,286<br/>Per Night</h5></td>
      <td width={150}>
      <Box
      sx={{
        '& > legend': { mt: 2 },
      }}>
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly />
      </Box>
      </td>
      
      <td><button onClick={handlebook}>Book Now!</button></td>
      </tr>
      </tbody>
      </table>
      </Paper>
      </Box>
      </div>
      </div>
      
  );
  
}
export default SearchForm;
