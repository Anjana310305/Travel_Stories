import React from "react";
import {BrowserRouter,Routes,Route,Router} from "react-router-dom";
import Firstpage from "./Firstpage";
import Login from './Login';
import Signup from "./Signup";
import Home from './Home';
import Hotel from './Hotel'
import Flight from "./Flight";
import Train from './Train';
import Final from './components/Final';
import Touristspot from './Touristspot';
import Checkout from "./Booking/Checkout";
import Summer1 from "./Summer/Summer1";
import Summer2 from "./Summer/Summer2";
import Summer3 from "./Summer/Summer3";
import Dest1 from './Dest1';
import Dest2 from './Dest2'
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Firstpage/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/Signup" element={<Signup/>}/>
   <Route path="/home" element={<Home/>}/>
   <Route path="/Hotel" element={<Hotel/>}/>
   <Route path="/Flight" element={<Flight/>}/>
   <Route path="/Train" element={<Train/>}/>
   <Route path="/Final" element={<Final/>}/>
   <Route path="/travel" element={<Touristspot/>}/>
   <Route path="/Checkout" element={<Checkout/>}/>
   <Route path="/thailand" element={<Summer1/>}/>
   <Route path="/maldives" element={<Summer2/>}/>
   <Route path="/bali" element={<Summer3/>}/>
   <Route path="/dest1" element={<Dest1/>}/>
   <Route path="/dest2" element={<Dest2/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App