import { Box, Flex, Stack, Heading, Text, Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import facebook from "../Images/facebook.png"
import youtube from "../Images/Youtube.png"

export default function Footer() {
  return (
    <Box bg="blue.400" color="white" py={10}>
      <Flex direction={["column", null, "row"]} justify="space-between" maxW="1200px" mx="auto">
        <Stack spacing={6} mr={[0, null, 12]}>
          <Heading size="lg">Coaching Institution</Heading>
          <Text mb={2}>Educational Services Limited</Text>
          <Text mb={2}>Registered Office Address:</Text>
          <Text mb={2}>No. 111, *th Cross, Paramount Gardens,</Text>
          <Text mb={2}>Thalaghattapura Kanakapura Main Road,</Text>
          <Text mb={2}>Bengaluru -560062</Text>
          <Text mb={2}>Mobile Phone +91-9380462121</Text>
          <Text mb={2}>Email: Designersunil23@gmail.com</Text>
        </Stack>
        <Stack spacing={6} mb={[8, null, 0]} mr={[0, null, 12]}>
          <Heading size="md">Follow Us On</Heading>
          <Wrap>
            <WrapItem>
              <Avatar name='Facebook' src={facebook} />
            </WrapItem>
            <WrapItem>
              <Avatar name='Youtube' src={youtube} />
            </WrapItem>
          </Wrap>
        </Stack>
        <Stack spacing={6}>
          <Heading size="md">About Us</Heading>
          <Text>About</Text>
          <Text>Why</Text>
          <Text>Methodology & Concept</Text>
          <Text>In Media</Text>
          <Text>Nationwide Centers</Text>
          <Text>Franchise Information</Text>
          <Text>Investor Corner</Text>
        </Stack>
        <Stack spacing={6}>
          <Heading size="md">NEET</Heading>
          <Text>NEET Exam 2023</Text>
          <Text>NEET 2023 Exam Dates</Text>
          <Text>NEET Previous Year Question Paper</Text>
          <Text>NEET Exam 2023</Text>
          <Text>NEET 2023 Exam Dates</Text>
          <Text>NEET Previous Year Question Paper</Text>
        </Stack>
      </Flex>
    </Box>
  );
}
