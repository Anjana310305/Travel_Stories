import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import './season.css';
import { useNavigate } from 'react-router-dom';
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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
    const Navigate=useNavigate();
const handlespot1=()=>{
    Navigate('/thailand')
}
const handlespot2=()=>{
    Navigate('/maldives')
}
const handlespot3=()=>{
    Navigate('/bali')
}
  return (
    <ThemeProvider theme={defaultTheme}>
      <div><table>
      <tbody>
      <tr>
      <td><Avatar className='img1'
      alt="Remy Sharp"
      src="https://img.freepik.com/premium-vector/sunset-beach-logo-design_62569-187.jpg"
      sx={{ width: 50, height: 50 }}
    />
      </td>
      <td><h1><a  style={{textDecoration:'none',color:'black'}}href='./home'>Travel Stories</a> > Seasonal Spots</h1></td>
      </tr>
      </tbody>
      </table>
      <div className='new'></div>
      </div>
    
        <table>
        <tbody>
        <tr style={{backgroundColor:'lightgrey',textAlign:'center'}}>
        <td><h1 >SNOWY</h1></td>
        </tr>
        <tr>
        <td>
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: '56.25%',
            }}
            image="https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Gulmarg.jpg"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
            KASHMIR
            </Typography>
            <Typography>
            Thailand is an amazing location to beat the summer heat. With cool blue waters, stunning beaches, and exotic food options, it makes it the perfect spot for a vacation. To make your trip even better, we have customized Thailand packages and good
            </Typography>
            <Button onClick={handlespot1}>View Packages</Button>
          </CardContent>
        </Card></td>
        <td>
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: '56.25%',
            }}
            image="https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Manali.jpg"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              MANALI
            </Typography>
            <Typography>
            Looking for a honeymoon location or a romantic holiday with your loved one? Then the Maldives is a very good option. Crystal clear waters and breathtaking properties and bespoke offerings to pamper you with the best.Maldives is a stunning island
            </Typography>
            <Button onClick={handlespot2}>View Packages</Button>
          </CardContent>
        </Card></td>
        <td>
        
        <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: '56.25%',
          }}
          image="https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Gangtok.jpg"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            GANGTOK,SIKKIM
          </Typography>
          <Typography>
          Bali is also an exotic location that you can explore for your holidays. Bali has been highly loved by all tourist that visit. Not only is the place beautiful but it is an affordable place. So now you can enjoy a luxurious stay without drilling a hole 
          </Typography>
          <Button onClick={handlespot3}>View Packages</Button>
        </CardContent>
      </Card></td></tr>
      <tr style={{backgroundColor:'lightgrey',textAlign:'center'}}>
        <td><h1 >HILL STATIONS</h1></td>
        </tr>
      <tr>
      <td>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: '56.25%',
          }}
          image="https://www.fabhotels.com/blog/wp-content/uploads/2016/09/Munnar.jpg"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
          Munnar,Kerala
          </Typography>
          <Typography>
          Munnar is a town in the Western Ghats mountain range in India’s Kerala state. A hill station and former resort for the British Raj elite, it's surrounded by rolling hills dotted with tea plantations established in the late 19th century. Eravikulam National Park, a habitat for the endangered mountain goat Nilgiri tahr
          </Typography>
          <Button>View Packages</Button>
          </CardContent>
      </Card></td>
      <td>
      
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: '56.25%',
          }}
          image="https://www.fabhotels.com/blog/wp-content/uploads/2018/08/1000x650-51.jpg"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
           Coorg,Karnataka
          </Typography>
          <Typography>
          Kodagu, also known as Coorg, is a rural district in the southwest Indian state of Karnataka. In the area’s north, Madikeri Fort has 2 life-size elephant statues at its entrance, plus a Gothic-style church with a museum on its grounds. Nearby, the Hindu Omkareshwara Temple dates back
          </Typography>
          <Button>View Packages</Button>
        </CardContent>
      </Card></td>
      <td>
      
      <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image="https://www.fabhotels.com/blog/wp-content/uploads/2019/04/ooty1.jpg"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          Ooty,Tamil Nadu
        </Typography>
        <Typography>
        Shimla-Kufri is a resort hill station in the district of Shimla, India. It is located 20 km from the state capital Shimla on the National Highway No. 22. On Kufri Avenue, the main thoroughfare, boutiques and restaurants mix with the Indian-style hotels and  the souvenir shops are to look for during a visit.
        </Typography>
        <Button>View Packages</Button>
      </CardContent>
    </Card></td></tr>
    <tr style={{backgroundColor:'lightgrey',textAlign:'center'}}>
        <td><h1 >BEACHY</h1></td>
        </tr>
    <tr>
    <td>
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image="https://www.fabhotels.com/blog/wp-content/uploads/2021/12/20.-Puducherry.jpg"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
        Puducherry,Tamil Nadu
        </Typography>
        <Typography>
        Seoul, the capital of South Korea, palaces and street markets. Notable attractions include futuristic Dongdaemun Design Plaza, a convention hall with curving architecture and a rooftop park; Gyeongbokgung Palace
        </Typography>
        <Button>View Packages</Button>
      </CardContent>
    </Card></td>
    <td>
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image="https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Goa.jpg"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          Goa
        </Typography>
        <Typography>
        Halle is a city and municipality of Belgium, in the district Halle-Vilvoorde of the province Flemish Brabant. It is located on the Brussels-Charleroi Canal and on the Flemish side of the language border that separates Flanders and Wallonia. 
        </Typography>
        <Button>View Packages</Button>
      </CardContent>
    </Card></td>
    <td>
    
    <Card
    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
  >
    <CardMedia
      component="div"
      sx={{
        // 16:9
        pt: '56.25%',
      }}
      image="https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Alleppey-Kerala-1.jpg"
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2">
       Alleppey,Kerala
      </Typography>
      <Typography>
      Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity
      </Typography>
      <Button>View Packages</Button>
    </CardContent>
  </Card></td></tr>
  <tr style={{backgroundColor:'lightgrey',textAlign:'center'}}>
        <td><h1 >DESERT</h1></td>
        </tr>
    <tr>
    <td>
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image="https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Jaisalmer.jpg"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
        Jaisalmer,Rajasthan
        </Typography>
        <Typography>
        Seoul, the capital of South Korea, palaces and street markets. Notable attractions include futuristic Dongdaemun Design Plaza, a convention hall with curving architecture and a rooftop park; Gyeongbokgung Palace
        </Typography>
        <Button>View Packages</Button>
      </CardContent>
    </Card></td>
    <td>
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image="https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Rann-of-Kutch.jpg"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          Rann of Kutch,Gujarat
        </Typography>
        <Typography>
        Halle is a city and municipality of Belgium, in the district Halle-Vilvoorde of the province Flemish Brabant. It is located on the Brussels-Charleroi Canal and on the Flemish side of the language border that separates Flanders and Wallonia. 
        </Typography>
        <Button>View Packages</Button>
      </CardContent>
    </Card></td>
    <td>
    
    <Card
    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
  >
    <CardMedia
      component="div"
      sx={{
        // 16:9
        pt: '56.25%',
      }}
      image="https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Udaipur.jpg"
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2">
       Udaipur,Kerala
      </Typography>
      <Typography>
      Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity
      </Typography>
      <Button>View Packages</Button>
    </CardContent>
  </Card></td></tr>
  </tbody></table>
   
      
    </ThemeProvider>
  );
}