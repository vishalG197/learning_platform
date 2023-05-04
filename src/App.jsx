import { Box, Stack } from "@chakra-ui/react"
import React from "react"
import Navbar from "./Components/Navbar"
import Slider from "./Components/Slider"
import About from "./Components/About"
function App(){
   return <Stack>
<Navbar/>
<Slider/>
<About/>
          </Stack>
}
export default App