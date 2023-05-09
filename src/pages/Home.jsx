import { Box } from "@chakra-ui/react";
import Slider from "../Components/Slider"
import Lectural from "../Components/Lectural";
import Toppers from "../Components/Toppers";
import About from "../Components/About"
import Footer from "../Components/Footer"
import Faculty from "../Components/Faculty"
export default function Home(){

   return <Box h="80vh" >
   <Slider/>
   <About/>
  <Faculty/>
   <Toppers/>
   <Lectural/>
   <Footer/>
   </Box>
}