import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, HStack, Heading, Image, Text } from "@chakra-ui/react";
import A1 from "../Images/A1.png"
import A2 from "../Images/A2.png"
import A3 from "../Images/A3.png"

export default function About(){

   return <Box h="80vh" 
   align="center" borderWidth="1px"
   borderRadius="lg"
   overflow="hidden"
   p={6}
   m={4}
   boxShadow="md" >
   <Center color="blue" size="lg" fontSize="40px">About</Center>
   <Center>
   <Heading >Our Coaching Instiution</Heading>
   </Center>
   
<HStack spacing='200px' m={6}>
<Card align='center' w="200px" h="250px"  m={50}>
  <CardHeader>
    <Image src={A1}/>
  </CardHeader>
  <CardBody>
  <Center>
   <Heading size="md"> 50+ </Heading>
   </Center><Center>
   <Text align="center">Coaching centers in india</Text>
    </Center>
  </CardBody>
 
</Card>
<Card align='center' w="200px" h="250px" m={20}>
  <CardHeader>
    <Image src={A2}/>
  </CardHeader>
  <CardBody>
  <Center>
   <Heading size="md"> 30000+ </Heading>
   </Center><Center>
   <Text align="center">Qualified NEET|IIT in 2022</Text>
    </Center>
  </CardBody>
 
</Card>
<Card align='center' w="200px" h="250px" m={20}>
  <CardHeader>
    <Image src={A3}/>
  </CardHeader>
  <CardBody>
  <Center>
   <Heading size="md"> 1000+ </Heading>
   </Center><Center>
    <Text align="center">
      Expert Faculty
    </Text>
    </Center>
  </CardBody>
 
</Card>
</HStack>
   </Box>
}