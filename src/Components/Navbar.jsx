
import { useState } from "react";
import { Flex, Box, Image, IconButton, Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

 export default function Navbar(){
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => setIsOpen(!isOpen);
   return <Box w='100%'  >
  <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem">
      <Box display="flex" alignItems="center">
        <Image src="../logo192.png" alt="Logo" w="120px"  h="40px"/>
      </Box>

      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        <IconButton icon={<HamburgerIcon />} variant="ghost" aria-label="Open menu" />
      </Box>

      <Box display={{ base: isOpen ? "block" : "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center" flexGrow={1}>
        <Box display="flex" alignItems="center" justifyContent={{ base: "center", md: "flex-end" }} width="100%">
          <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="ghost" display={{ md: "none" }} />
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Contact</MenuItem>
            </MenuList>
          </Menu>
          <Box ml={{ base: 0, md: 4 }}>
            about us
          </Box>
          <Box ml={{ base: 0, md: 4 }}>
            Results
          </Box>
          <Box ml={{ base: 0, md: 4 }}>
            Course
          </Box>
          <Box ml={{ base: 0, md: 4 }}>
            Blog
          </Box>
          <Box ml={{ base: 0, md: 4 }}>
            Contact us
          </Box>
          <Box ml={{ base: 0, md: 4 }}>
          <Button colorScheme='blue'>Sign In</Button>
          </Box>
        </Box>
      </Box>
    </Flex>
   </Box>
}