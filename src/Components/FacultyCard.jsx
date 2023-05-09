import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const FacultyCard = ({ name, role, photo }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      _hover={{ boxShadow: "lg" }}
    >
      <Image src={photo} alt={name} />

      <Box p="4">
        <Heading as="h3" size="md" mb="1">
          {name}
        </Heading>
        <Text fontWeight="bold" color="gray.500" mb="2">
          {role}
        </Text>
        <Flex justify="center">
          <Box w="60%" bg="blue.400"
          borderWidth="1px" borderRadius="md" py="1">
            <Text textAlign="center">View more</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default FacultyCard;
