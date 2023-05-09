import { Box, Stack } from "@chakra-ui/react"
import React from "react"
import {  Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login";
import Admission from "./pages/Admision";
// import ToppersSlider from "./Components/Topperslider"
function App(){
   return <Stack>
<Navbar/> 

<Routes>
    
        <Route  path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admission" element={<Admission/>} />
     
    </Routes>

          </Stack>
}
export default App