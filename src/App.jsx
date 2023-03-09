import { Box, Card, CardBody, CardHeader, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Skeleton, useDisclosure, Text, SimpleGrid } from '@chakra-ui/react';
import './App.css'
import SliderImage from './components/header/SliderImage';
import MoviesBodySection1 from './components/body/MoviesBodySection1';
import Movie from './components/Movie';
import MoviesBodySection2 from './components/body/MoviesBodySection2';
import MoviesBodySection3 from './components/body/MoviesBodySection3';
import MoviesBodySection4 from './components/body/MoviesBodySection4';
import Navbar from './components/navbar/Navbar';
import { SkeletonDesktop, SkeletonDesktopHeader, SkeletonTab } from './components/skeleton/MoviesSectionSkeleton';

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
        </Container>
      </div>
    </div>
  )
}

export default App
