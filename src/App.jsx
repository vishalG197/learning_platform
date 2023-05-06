import { Box, Stack } from "@chakra-ui/react"
import React from "react"
import Navbar from "./Components/Navbar"
import Slider from "./Components/Slider"
import About from "./Components/About"
import CourseCard from "./Components/CourseCard"
import Faculty from "./Components/Faculty"
function App(){
   return <Stack>
<Navbar/>
<Slider/>
<About/>
<Faculty/>
          </Stack>
}
export default App