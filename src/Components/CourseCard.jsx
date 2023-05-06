import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Heading, Text, Button, Image, HStack } from "@chakra-ui/react";
import img from "../Images/img1.png"
const CourseCard = ({ courseName, description, duration, fee }) => {
  return ( <Box
    ml="40px"
    W="100%"
    
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p={6}
    m={4}
    boxShadow="md"
  >
    <HStack  spacing='24px'>
    <Box
      w="50%"
      
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      m={4}
      
    >
      <Heading as="h2"  size='3xl' mb={2}>
        Online & offline coaching classes for <Heading as="h1" size='3xl' mb={4} color="blue">NEET|IIT</Heading>
      </Heading>
      <Text mb={4}>Best academics experienced faculty , advanced study material , regular &doubt counter Do you want to add spairs to your NEET progression?
      <span>Coaching institude Admisson are open now</span></Text>
      <Button rightIcon={<ArrowForwardIcon />} colorScheme='white' variant='outline'>
    Know more
  </Button>
      <Button rightIcon={<ArrowForwardIcon />} colorScheme='blue' ml="10px">
    Join Now
  </Button>
 
    </Box>
    <Box
     w="50%"
    
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      m={4}
      
    >
  <Image src={img} alt='Dan Abramov' m="auto" w="100%" />
</Box>
    </HStack>
    </Box>
  );
};

export default CourseCard;
