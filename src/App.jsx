import { Box, Stack } from "@chakra-ui/react"
import React from "react"
import Navbar from "./Components/Navbar"
import Slider from "./Components/Slider"
import About from "./Components/About"
import CourseCard from "./Components/CourseCard"
import Faculty from "./Components/Faculty"
import Footer from "./Components/Footer"
import Toppers from "./Components/Toppers"
// import ToppersSlider from "./Components/Topperslider"
function App(){
   return <Stack>
<Navbar/>
<Slider/>
<About/>
<Faculty/>
<Toppers/>
{/* <ToppersSlider/> */}
<Footer/>
          </Stack>
}
export default App