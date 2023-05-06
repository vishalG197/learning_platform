import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Heading, Text, Button, Image, HStack } from "@chakra-ui/react";
import img from "../Images/F1.png"
// import F1 from ".."
const Faculty = ({ courseName, description, duration, fee }) => {
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
  <Image src={img} alt='Dan Abramov' m="auto" w="100%" />
</Box>
    <Box
      w="50%"
      
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      m={4}
      
    >
      <Heading as="h2"  size='3xl' mb={2}>
        You will gate classes with qualified lectures
      </Heading>
      <Text mb={4}>we successfully provide students with intensive courses by india's top faculties and personal mentors </Text>
      <Button rightIcon={<ArrowForwardIcon />} colorScheme='white' variant='outline'>
    Know more
  </Button>
</Box>
   
    </HStack>
    </Box>
  );
};

export default Faculty;
