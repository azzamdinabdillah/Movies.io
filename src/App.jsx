import { Box, Card, CardBody, CardHeader, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Skeleton, useDisclosure, Text } from '@chakra-ui/react';
import './App.css'
import SliderImage from './components/header/SliderImage';
import MoviesBodySection1 from './components/body/MoviesBodySection1';
import Movie from './components/Movie';
import MoviesBodySection2 from './components/body/MoviesBodySection2';
import MoviesBodySection3 from './components/body/MoviesBodySection3';
import MoviesBodySection4 from './components/body/MoviesBodySection4';
import { useRef } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <div className="App">
      <div className='w-full'>
        <Container maxWidth={'full'} p={"0"} >
          <Navbar/>

          <Movie/>
          <SliderImage/>
          <MoviesBodySection1/>
          <MoviesBodySection2/>
          <MoviesBodySection3/>
          <MoviesBodySection4/>

            {/* <Card mx={{ base:5, md:"14", lg:"32" }} bg={"whiteAlpha.100"} mt={7} borderRadius={"15px"} overflow={"hidden"} border={"none"} outline={"none"} className="">
                <CardHeader px={4} m={0} pt={4}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"100%"} h={20} borderRadius={"15px"} />
                </CardHeader>
                <CardBody px={4} pb={4} pt={0} m={0}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"80%"} h={5} borderRadius={"15px"} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"60%"} h={5} borderRadius={"15px"} my={3} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={5} borderRadius={"15px"} />
                </CardBody>
            </Card> */}
        </Container>
      </div>
    </div>
  )
}

export default App
