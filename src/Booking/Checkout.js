import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import Shipping from './Shipping';
import Payment from './Payment';
import { useNavigate } from 'react-router-dom';
import './Check.css';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>

  );
}

const steps = ['Contact details', 'Payment details'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Shipping/>;
    case 1:
      return <Payment />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const Navigate=useNavigate();
  const handlehome=()=>{
      Navigate('/home')
  }
  return (
    <div className='check'>
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) =>`1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar style={{backgroundColor:'lightpink'}}>
        <center>
        <tr>
        <td width='100px' style={{paddingTop:'1%'}}><Avatar alt="company" src='https://i.pinimg.com/originals/db/6f/3d/db6f3d858139a6a01a444d9f77a8055f.jpg' sx={{ width: 50, height: 50}}/></td>
          <td style={{textAlign:'center',paddingBottom:'5%'}}><Typography  color="inherit" noWrap >
           <Button onClick={handlehome} style={{color:'black'}}><h1>"TRAVEL STORIES"</h1></Button> 
           </Typography></td>
           </tr>
           </center>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
            <center>
              <img src='data:image/jpeg;base64,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' />
              </center>
              <Typography variant="subtitle1">
               Your Booking has been Confirmed. For any quries contact <b>travel_stories@gmail.com</b><br/>
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Pay Now' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
    </div>
  );
}