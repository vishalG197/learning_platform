import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Grid, GridItem, HStack, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TopperCard from "./TopperCard";
import data from "../toppers.json"
export default function Toppers(){
   const [toppers, setToppers] = useState([]);
   const [showAll, setShowAll] = useState(false);
   const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlide = toppers.length - 1;
  const nextSlideHandler = () => {
   setCurrentSlide((prevSlide) => (prevSlide === maxSlide ? 0 : prevSlide + 1));
 };

 const prevSlideHandler = () => {
   setCurrentSlide((prevSlide) => (prevSlide === 0 ? maxSlide : prevSlide - 1));
 };
 console.log(data)
   useEffect((API_URL) => {
    setToppers(data)
   }, []);
 
   const toggleShowAll = () => setShowAll(!showAll);
 
   return <HStack>
    <Box h="80vh" bg="" alight="top">
   <Text color="blue.400">Toppers</Text>
   <Heading>NEET UG 2022</Heading>
   <Text>All India Rank (AIR)</Text>
   <Text>We successfully provide students with intensive courses by india's top faculties and personal mentors.</Text>
  {/* { <Button rightIcon={<ArrowForwardIcon />} colorScheme='white' variant='outline'>
    Know more
  </Button>} */}
  <Button rightIcon={<ArrowForwardIcon />}
        colorScheme="blue.400"
        variant="outline"
        onClick={toggleShowAll}
        mb={4}
      >
        Know more
      </Button>
</Box>
<Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {toppers
          .slice(0, showAll ? toppers.length : 3)
          .map(({ id, name, rank, image, score }) => (
            <GridItem key={id}>
              <TopperCard name={name} rank={rank} image={image} score={score} />
            </GridItem>
          ))}
      </Grid>
   </Box>
   </HStack>
}