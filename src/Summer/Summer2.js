import React ,{ChangeEvent, useState }from 'react'
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
const Summer2 = () => {
    const [value, setValue] = React.useState(5);
  return (
    <>
    <div><img width={1370} height={500} src='https://media.easemytrip.com/media/Blog/International/637867579316652136/637867579316652136hNPxy2.jpg'></img></div>
    <div>
    <h2>HIDDEN SPOTS---></h2>
    <h3>1.Koh Lipe----<a style={{textDecoration:'none'}}href='https://www.google.com/maps/place/Koh+Lipe/data=!4m2!3m1!1s0x304c04b682540c8f:0xef2301cf0a9d3394?sa=X&ved=2ahUKEwj0xIbIkOyCAxVOUWwGHXEmBuwQ8gF6BAgNEAA'>Location</a></h3>
    <h3>2.Chiang Mai----<a style={{textDecoration:'none'}} href='https://www.google.com/maps/place/Chiang+Mai/data=!4m2!3m1!1s0x30da3a7e90bb6f5d:0x98d46270a59b4367?sa=X&ved=2ahUKEwiA_ceAkuyCAxWPNN4KHdF3ATYQ8gF6BAgMEAA'>Location</a></h3>
    <h3>3.Khao Sok National Park---<a style={{textDecoration:'none'}} href='https://www.google.com/maps/place/Khao+Sok+National+Park/@8.9777134,98.6381879,15z/data=!4m2!3m1!1s0x0:0x8e7f172ecc1fad30?sa=X&ved=2ahUKEwielZ6nkuyCAxWQGogKHdY6BmoQ_BJ6BAgKEAA'>Location</a></h3>
    </div>
    <div>
    <h2>Famous Restaurants---></h2>
    <Paper elevation={3}>
 
      <table>
      <tbody>
      <tr>
      <td width={50}>
      <img className='hotelpic' src="https://lh5.googleusercontent.com/p/AF1QipNfyQa7uXuDm5tfMTC3zQpATnUlFPezCKBC_aiI=w171-h171-n-k-no"/>
      </td>
      <td width={120}><h5 className='txt'>Sra Bua by Kiin Kiin</h5></td>
      <td width={120}><h5 className='txt'>Bangkok 10330, Thailand</h5></td>
      <td width={120}><h5 className='txt'>Open:12.00pm<br/>close:12.00am</h5></td>
      <td width={120}><a style={{textDecoration:'none'}} href='https://www.google.com/maps/place/Sra+Bua+by+Kiin+Kiin/@13.7485218,100.5351244,15z/data=!4m2!3m1!1s0x0:0xa7dee9c595913013?sa=X&ved=2ahUKEwjthr2eluyCAxX_SmwGHfcQDRwQ_BJ6BAgKEAA'>Visit Us!!</a></td>
      <td width={150}>
      <Box
      sx={{
        '& > legend': { mt: 2 },
      }}>
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly />
      </Box>
      </td>
      </tr>
      </tbody>
      </table>
      </Paper>
    <div>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 800,
          height: 128,
        },
      }}
      ></Box>
    </div>
    <Paper elevation={3}>
 
      <table>
      <tbody>
      <tr>
      <td width={50}>
      <img className='hotelpic' src="https://lh3.googleusercontent.com/p/AF1QipPhN0r0ZqT-FTyJlY4NDHibiRtYgy9zN6f_8-mS=s1360-w1360-h1020"/>
      </td>
      <td width={120}><h5 className='txt'>The House of Smooth Curry</h5></td>
      <td width={120}><h5 className='txt'>Pathum Wan, Bangkok, Thailand</h5></td>
      <td width={120}><h5 className='txt'>Open:11.30am<br/>close:10.00pm</h5></td>
      <td width={120}><a style={{textDecoration:'none'}} href='https://www.google.com/maps/place/The+House+of+Smooth+Curry/@13.7411518,100.5476989,15z/data=!4m2!3m1!1s0x0:0x781daa81a4da15a?sa=X&ved=2ahUKEwiCtoO1l-yCAxXlTWwGHfPGA4UQ_BJ6BAgKEAA'>Visit Us!!</a></td>
      <td width={150}>
      <Box
      sx={{
        '& > legend': { mt: 2 },
      }}>
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly />
      </Box>
      </td>
      </tr>
      </tbody>
      </table>
      </Paper>
    <div>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 800,
          height: 128,
        },
      }}
      ></Box>
    </div>
    <Paper elevation={3}>
 
      <table>
      <tbody>
      <tr>
      <td width={50}>
      <img className='hotelpic' src="https://lh3.googleusercontent.com/p/AF1QipNtxEnk7CIGgNABtJS_Tlqut8WTPhdZJY7Z4-bk=s1360-w1360-h1020"/>
      </td>
      <td width={120}><h5 className='txt'>EAT ME RESTAURANT</h5></td>
      <td width={120}><h5 className='txt'>Bangkok 10500, Thailand</h5></td>
      <td width={120}><h5 className='txt'>Open:10.00am<br/>close:1.00am</h5></td>
      <td width={120}><a style={{textDecoration:'none'}} href='https://www.google.com/maps/uv?pb=!1s0x30e29eb932a8cac3:0xeb809dbbdea3830a!3m1!7e115!4s/maps/place/eat%2Bme%2Brestaurant%2Bbangkok/@13.7255699,100.5338293,3a,75y,188h,90t/data%3D*213m4*211e1*213m2*211sRn4xvKtQmGhfz4584Aoazw*212e0*214m2*213m1*211s0x30e29eb932a8cac3:0xeb809dbbdea3830a?sa%3DX%26ved%3D2ahUKEwjP0e31luyCAxVfSWwGHbrvAPsQpx96BAgKEAA!5seat+me+restaurant+bangkok+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e2!2sRn4xvKtQmGhfz4584Aoazw&hl=en&sa=X&ved=2ahUKEwjP0e31luyCAxVfSWwGHbrvAPsQpx96BAgvEAw'>Visit Us!!</a></td>
      <td width={150}>
      <Box
      sx={{
        '& > legend': { mt: 2 },
      }}>
      <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly />
      </Box>
      </td>
      </tr>
      </tbody>
      </table>
      </Paper>
    <div>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 800,
          height: 128,
        },
      }}
      ></Box>
    </div>
    </div>
    </>
  )
}

export default Summer2