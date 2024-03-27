import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import images from './images/train.jpeg';
import images2 from './images/flight.jpg';
import { useNavigate } from 'react-router-dom';
import './Frontcss.css'; // Import your CSS file for styling
import video2 from './new/videos/v2.mp4'

const Home = () => {
  const navigate = useNavigate();

  const handleHotel = () => {
    navigate('/Hotel');
  };

  const handleFlight = () => {
    navigate('/Flight');
  };

  const handleTrain = () => {
    navigate('/Train');
  };

  const handleTravel = () => {
    navigate('/travel');
  };

  const handleExp1 = () => {
    navigate('/Dest1');
  };

  const handleExp2 = () => {
    navigate('/Dest2');
  };

  return (
    <div className="video-background">
      <video autoPlay muted loop id="video-bg">
        <source src={video2} type="video/mp4" />
        {/* Add additional video formats if needed */}
      </video>

      <div className="content-overlay">
        <div className="pap">
          <table className="titled">
            <tbody>
              <tr>
                <td width={150}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://i.pinimg.com/originals/db/6f/3d/db6f3d858139a6a01a444d9f77a8055f.jpg"
                    sx={{ width: 94, height: 94 }}
                  />
                </td>
                <td>
                  <h1 style={{ color: 'white' }}>TRAVEL_STORIES</h1>
                </td>
              </tr>
            </tbody>
          </table>
          <Box
            sx={{
              paddingLeft: 22,
              paddingTop: 10,
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 1000,
                height: 228,
              },
            }}
          >
            <Paper elevation={3} style={{ backgroundColor: 'lightyellow' }}>
              <Button onClick={handleFlight}>
                <div className="av1">
                  <Avatar
                    alt="Remy Sharp"
                    src={images2}
                    sx={{ width: 84, height: 84 }}
                  />
                  <p>FLIGHT</p>
                </div>
              </Button>
              <Button onClick={handleHotel}>
                <div className="av2">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://img.freepik.com/premium-vector/hotel-logo-design_423075-16.jpg"
                    sx={{ width: 84, height: 84 }}
                  />
                  <p>HOTELS</p>
                </div>
              </Button>
              <Button onClick={handleTrain}>
                <div className="av3">
                  <Avatar
                    alt="Remy Sharp"
                    src={images}
                    sx={{ width: 84, height: 84 }}
                  />
                  <p>TRAIN</p>
                </div>
              </Button>
              <Button onClick={handleTravel}>
                <div className="av4">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://img.freepik.com/premium-vector/sunset-beach-logo-design_62569-187.jpg"
                    sx={{ width: 84, height: 84 }}
                  />
                  <p>TRAVEL SPOTS</p>
                </div>
              </Button>
            </Paper>
          </Box>
          <div className="blink">
            <h4 style={{ color: 'white' }}>TRENDING PACKAGES</h4>
          </div>
          <div className="marq">
            <marquee direction="up" height="250">
              <button onClick={handleExp1}>
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
                  >
                    <Paper
                      elevation={3}
                      style={{ backgroundColor: 'lightyellow' }}
                    >
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                width={200}
                                height={120}
                                src="https://www.easytravelrecipes.com/wp-content/uploads/2022/01/honeymoon-places-easytravelrecipes.jpg"
                              />
                            </td>
                            <td>
                              <h3 className="txt">
                                Magnificent Maldives is awaiting for you!!!!
                              </h3>
                              <h5>Experience what adventure is..!!</h5>
                            </td>
                            <td>
                              <button>Explore</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Paper>
                  </Box>
                </div>
              </button>
              <div>
                <button onClick={handleExp2}>
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
                  >
                    <Paper
                      elevation={3}
                      style={{ backgroundColor: 'lightyellow' }}
                    >
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                width={200}
                                height={120}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTBCp1XPzFjYtkUhWzumbhXMp1jrURhIYD_Q&usqp=CAU"
                              />
                            </td>
                            <td>
                              <h3 className="txt">
                                Come to breathe the fresh air of dense forests at
                                Bali!!!
                              </h3>
                              <h5>Wanna go wild...??</h5>
                            </td>
                            <td>
                              <button>Explore</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Paper>
                  </Box>
                </button>
              </div>
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
