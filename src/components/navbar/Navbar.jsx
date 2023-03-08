import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import { Link } from "react-router-dom"

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <Box>
        <HamburgerIcon display={{ base:"block", md:"none" }} p={3} _hover={{ bg:"white", color:"black" }} transition={"0.3s"} borderRadius={10} ref={btnRef} colorScheme='teal' onClick={onOpen} color="white" boxSize={"50px"} />
  
        <Box display={{ base:"none", md:"block" }}>
            <Flex gap={10}>
                <Link to={'/'} className="text-white font-semibold hover:opacity-70">Home</Link>
                <Link to={'/search'} className="text-white font-semibold hover:opacity-70">Search</Link>
            </Flex>
        </Box>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Movie.io</DrawerHeader>
  
            <DrawerBody>
              {/* <Input placeholder='Type here...' /> */}
                <Link className="hover:bg-black hover:text-white font-semibold px-3 py-3 transition rounded-lg w-full block" to={'/'} >Home</Link>
                <Link className="hover:bg-black hover:text-white font-semibold px-3 mt-3 py-3 transition rounded-lg w-full block" to={'/search'} >Search</Link>
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </Box>
    )
  }

  export default function Navbar()
  {
    return (
        <Box>
            <Flex px={{ base:5, md:10, lg:20 }} py={{ base:3, md:5 }} justifyContent={"space-between"} alignItems="center">
                <Text fontSize={"lg"} color={"white"} fontWeight={"bold"}>Movies.io</Text>
                <DrawerExample/>
            </Flex>
        </Box>
    )
  }