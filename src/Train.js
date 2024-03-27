import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { DateField } from '@mui/x-date-pickers/DateField';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/base';
import './flight/Fsearch.css';

const SearchForm = ({ onSearch }) => {
  const [isShown, setIsShown] = useState(false);
  const handleSearch = () => {
    // Perform search logic
    setIsShown(current => !current);
  };
  
  return (
    <>
    <div className='trainbook'>
    <table>
    <tbody>
    <tr>
    <td><Avatar className='img1'
    alt="Remy Sharp"
    src="data:image/jpeg;base64,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"
    sx={{ width: 90, height: 90 }}
  />
    </td>
    <td><h1 className='align' ><a href='./Home'style={{textDecoration:'none',color:'black'}}>Travel_Stories </a> > Online Ticket Bookings</h1></td></tr></tbody></table>
    <div style={{textAlign:'center'}}>
    <h3>One-Way</h3>
      <h5>FROM</h5>
      <input style={{width:300,height:50}}
        type="text"
        placeholder="Origin"
        //value={origin}
        //onChange={(e) => setOrigin(e.target.value)}
      />
      <h5>TO</h5>
      <input style={{width:300,height:50}}
        type="text"
        placeholder="Destination"
        //value={destination}
        //onChange={(e) => setDestination(e.target.value)}
      />
      <h5>DEPARTURE</h5>
      <input style={{width:300,height:50}}
        type="date"
        placeholder="Departure"
        //value={date}
        //onChange={(e) => setDate(e.target.value)}
      />
      <h5></h5>
      <button style={{width:150,height:50}} onClick={handleSearch}>Search</button>
      {isShown && (
        <div className='sres'>
          <h3>Search Results</h3>
        </div>
      )}
      <div className='result'>
      {isShown && <Boxed />}
      </div>
      </div>
    </div>
    </>
  );
};
function Boxed() {
  const navigate=useNavigate();
  const handlebook=()=>{
      navigate('/Checkout');
  }
  return (
    <>
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
    <td>
    <Avatar className='img'
  alt="Remy Sharp"
  src="data:image/png;base64,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"
  sx={{ width: 60, height: 60 }}
/>
    </td>
    <td ><h5 className='txt'>Ajmer Express<br/>
    6E 5355, 6E 194</h5></td>
    <td><h5 className='txt'>10:20 PM,Tue<br/>
    Banglore<br/>Junc</h5></td>
    <td><h5 className='txt'>09h48m</h5></td>
    <td><h5 className='txt'>8:08 AM,Wed<br/>
</h5></td>
    <td><h5 className='txt'>₹ 1250<br/>
    per adult</h5></td>
    <td>
    <Button onClick={handlebook}>Book Now</Button>
    </td>
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
    <td>
    <Avatar className='img'
  alt="Remy Sharp"
  src="data:image/png;base64,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"
  sx={{ width: 60, height: 60 }}
/>
    </td>
    <td ><h5 className='txt'>KcgYnkExp<br/>
    AI 539, AI 605</h5></td>
    <td><h5 className='txt'>8:45 AM,Tue<br/>
   Doddaballapur<br/>Railway Station</h5></td>
    <td><h5 className='txt'>7h0m
  </h5></td>
    <td><h5 className='txt'>3:45PM,Tue<br/>
    Goa-Madgoan Junction</h5></td>
    <td><h5 className='txt'>₹ 900<br/>
    &nbsp;&nbsp;{'\t'}per adult</h5></td>
    <td><Button onClick={handlebook}>Book Now</Button></td>
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
    <td>
    <Avatar className='img'
  alt="Remy Sharp"
  src="data:image/png;base64,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"
  sx={{ width: 60, height: 60 }}
/>
    </td>
    <td ><h5 className='txt'>Ten Dr Express<br/>
    UK 532, UK 557</h5></td>
    <td><h5 className='txt'>6:30 AM,Tue<br/>Bangalore Junc
  </h5></td>
    <td><h5 className='txt'>09h38m</h5></td>
    <td><h5 className='txt'>4:08 PM<br/>
    Goa-Londa junction</h5></td>
    <td><h5 className='txt'>₹ 1260<br/>
    per adult</h5></td>
    <td><Button onClick={handlebook}>Book Now</Button></td>
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
    <td>
    <Avatar className='img'
  alt="Remy Sharp"
  src="data:image/png;base64,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"
  sx={{ width: 60, height: 60 }}
/>
    </td>
    <td ><h5 className='txt'>YprVsgExp<br/>
    6E 5355, 6E 194</h5></td>
    <td><h5 className='txt'>3:00PM,Tue<br/>
    Bangalore(YPR)</h5></td>
    <td><h5 className='txt'>12h 25m
    </h5></td>
    <td><h5 className='txt'>3:25,Wed<br/>
    Goa - Madgoan Junction</h5></td>
    <td><h5 className='txt'>₹ 1016<br/>
    per adult</h5></td>
    <td><Button onClick={handlebook}>Book Now</Button></td>
    </tr>
    </tbody>
    </table>
    </Paper>
    </Box>
    </div>
    </div>
    </>
  );
}
export default SearchForm;