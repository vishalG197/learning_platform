import { Box, Text, Image } from "@chakra-ui/react";

const TopperCard = ({ name, rank, image, score }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Image src={image} alt={name} />
      <Box p="4">
        <Text fontWeight="bold" fontSize="xl" mb="2">
          {name}
        </Text>
        <Text mb="2">
          Rank: <Text as="span">{rank}</Text>
        </Text>
        <Text mb="2">
          Score: <Text as="span">{score}</Text>
        </Text>
      </Box>
    </Box>
  );
};

export default TopperCard;
