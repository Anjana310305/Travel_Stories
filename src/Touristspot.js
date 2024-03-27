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
import './Touristspot.css';
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
      <td><h1><a  style={{textDecoration:'none',color:'black'}}href='./home'>Travel Stories</a> > Travel Spots</h1></td>
      </tr>
      </tbody>
      </table>
      <div className='new'></div>
      </div>
    
        <table>
        <tbody>
        <tr style={{backgroundColor:'lightgrey',textAlign:'center'}}>
        <td><h1 >SUMMER</h1></td>
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
            image="https://media.easemytrip.com/media/Blog/International/637867579316652136/637867579316652136pUfqUI.jpg"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
            Thailand
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
            image="https://media.easemytrip.com/media/Blog/International/637867579316652136/637867579316652136hNPxy2.jpg"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              Maldives
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
          image="https://media.easemytrip.com/media/Blog/International/637867579316652136/637867579316652136j2C9l1.jpg"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Bali
          </Typography>
          <Typography>
          Bali is also an exotic location that you can explore for your holidays. Bali has been highly loved by all tourist that visit. Not only is the place beautiful but it is an affordable place. So now you can enjoy a luxurious stay without drilling a hole 
          </Typography>
          <Button onClick={handlespot3}>View Packages</Button>
        </CardContent>
      </Card></td></tr>
      <tr style={{backgroundColor:'lightgrey',textAlign:'center'}}>
        <td><h1 >WINTER</h1></td>
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
        image="https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Shimla.jpg"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          Shimla-Kufri,Himachal Pradesh
        </Typography>
        <Typography>
        Shimla-Kufri is a resort hill station in the district of Shimla, India. It is located 20 km from the state capital Shimla on the National Highway No. 22. On Kufri Avenue, the main thoroughfare, boutiques and restaurants mix with the Indian-style hotels and  the souvenir shops are to look for during a visit.
        </Typography>
        <Button>View Packages</Button>
      </CardContent>
    </Card></td></tr>
    <tr style={{backgroundColor:'lightgrey',textAlign:'center'}}>
        <td><h1 >SPRING</h1></td>
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
        image="http://www.edreams.pt/blog/wp-content/uploads/sites/4/2017/03/Seoul-coreia-primavera.jpg"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
        Seoul,SouthKorea
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
        image="http://www.edreams.pt/blog/wp-content/uploads/sites/4/2017/03/Hallerbos-%E2%80%93-B%C3%A9lgica-Primavera.jpg"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          Halle,Belgium
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
      image="http://www.edreams.pt/blog/wp-content/uploads/sites/4/2017/03/Monte-Fuji-%E2%80%93-Jap%C3%A3o-Primavera.jpg"
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography gutterBottom variant="h5" component="h2">
        Mount Fuji,Japan
      </Typography>
      <Typography>
      Japan’s Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo. Commonly called “Fuji-san,” it’s the country’s tallest peak, at 3,776 meters. A pilgrimage site for centuries, it’s considered one of Japan’s 3 sacred mountains, and summit hikes remain a popular activity
      </Typography>
      <Button>View Packages</Button>
    </CardContent>
  </Card></td></tr></tbody></table>
   
      
    </ThemeProvider>
  );
}