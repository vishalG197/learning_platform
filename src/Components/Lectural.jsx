import { Box, Button, Grid, GridItem, HStack, Heading, Text } from "@chakra-ui/react";
import facultydata from "../faculty.json"
import faculty from "../faculty.json"
import { useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import FacultyCard from "./FacultyCard"
export default function Lectural(){
   const [showAll, setShowAll] = useState(false);
   return <Box h="100vh" >
   <HStack>
      <Box>
<Text color="Blue.400">Our</Text>
<Heading>Expert Faculty</Heading>
<Text>We successfully provide students with intensive courses by india's top faculties and personal mentors</Text>
<Button rightIcon={<ArrowForwardIcon />}
        colorScheme="blue.400"
        variant="outline"
        onClick={()=>setShowAll(!showAll)}
        mb={4}
      >
        Know more
      </Button>
      </Box>
      <Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {faculty
          .slice(0, showAll ? faculty.length : 3)
          .map((el) => (
            <GridItem key={el.id}>
              <FacultyCard {...el} />
            </GridItem>
          ))}
      </Grid>
      </Box>
   </HStack>
   </Box>
}