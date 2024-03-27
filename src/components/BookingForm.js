import { Divider } from '@mui/material';
import React, { useState } from 'react';

const BookingForm = ({ onBook }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleBook = () => {
    // Perform booking logic
    onBook({ name, email });
  };

  return (
    <div>
    <table className='tab2'>
      <td width={230}>NAME:</td>
      <td width={230}>EMAIL:</td>
      </table><br/>
      <div className='div1'>
      <input className='inpplace'
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input className='inpplace'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div className='find'>
      <button onClick={handleBook}>Book Now</button>
      </div>
    </div>
  );
};

export default BookingForm;
