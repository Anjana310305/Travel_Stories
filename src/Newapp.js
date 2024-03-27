import React from "react";
import Login from './Login';
import {BrowserRouter,Routes,Route,Router} from "react-router-dom";
import Firstpage from "./Firstpage";
import Newsignup from "./new/Newsignup";
import Newlogin from "./new/Newlogin";
import Newhome from './new/Newhome';
import Domestic from "./new/Domestic";
import International from "./new/International";
import Domseasonspots from './new/Domseasonspots';
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Firstpage/>}/>
   <Route path="/home" element={<Newhome/>}/>
   <Route path="/login" element={<Newlogin/>}/>
   <Route path="/Signup" element={<Newsignup/>}/>
   <Route path="/domestic" element={<Domestic/>}/>
   <Route path="/international" element={<International/>}/>
   <Route path="/touristspot" element={<Domseasonspots/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App