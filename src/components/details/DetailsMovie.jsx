import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Grid, GridItem, Image, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function DetailsMovie()
{
    const apiKey = "deaa900ca3b05a88dd6821f011977eea";
    const { platform, movieId } = useParams();
    let [detailMovie, setDetailMovie] = useState([]);
    let [genre, setGenre] = useState([]);
    let [loading, setLoading] = useState();
    let [companies, setCompanies] = useState([]);
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/${platform}/${movieId}?api_key=${apiKey}`).then((response) => {
            setDetailMovie(response.data);
            setGenre(response.data.genres);
            setCompanies(response.data.production_companies);
        });
    }, [])


    return (
        <>
        {/* navbar */}
        <Navbar/>

        <Grid templateColumns={{ base:"repeat(6, 1fr)", lg:"repeat(5, 1fr)" }} py={{ base:0, md:"14" }} px={{ base:0, md:10, lg:20 }} justifyContent={"center"} placeContent={"start"} placeItems={"start"} columnGap={{ base:0, md:10, lg:0 }}>
                <GridItem colSpan={{ base:6, md:3, lg:2 }}>
                    <Box pt={{ base:7, md:0 }} display={{ base:"none", md:"block", lg:"none" }} mb={10}>
                        <Text color={"white"} fontSize={"4xl"} fontWeight={"bold"}>{detailMovie.title}</Text>
                    </Box>
                    <Box>
                        <Image borderRadius={{ base:0, md:10 }} filter={"auto"} brightness={"80%"} objectFit={"cover"} objectPosition={"bottom"} w={"full"} src={`https://image.tmdb.org/t/p/w500/${detailMovie.backdrop_path}`} style={{ 
                            boxShadow: '3px -200px 61px -126px rgba(0,0,0,0.44) inset'
                        }}
                        />
                    </Box>
                    <Box margin={5}>
                        <Button bg={"whiteAlpha.100"} w={"full"} py={7} borderRadius={'full'}>
                            <Flex gap={4}>
                                <Image src={'/image/trailer.png'}/>
                                <Text fontSize={"lg"} color={"blue.300"}>Trailer</Text>
                            </Flex>
                        </Button>
                    </Box>
                    <Box mt={7}>
                        <Flex justifyContent={"space-around"} alignItems={"center"} px={3}>
                            <Box>
                                <Image src="/image/star.svg" mx={"auto"} />
                                <Text color={"white"} mt={2}>Favorite</Text>
                            </Box>
                            <Box className="translate-y-1">
                                <Image src="/image/bookmark.png" mx={"auto"} />
                                <Text color={"white"} mt={2}>Watch Later</Text>
                            </Box>
                            <Box>
                                <Image src="/image/view.png" mx={"auto"} />
                                <Text color={"white"} mt={2}>Watched</Text>
                            </Box>
                        </Flex>
                    </Box>
                </GridItem>
                <GridItem colSpan={{ base:6, md:3, lg:3 }} px={5}>
                    <Box pt={{ base:7, lg:0 }} display={{ base:"block", md:"none", lg:"block" }}>
                        <Text color={"white"} fontSize={{ base:"xl", lg:"4xl" }} fontWeight={"bold"}>{(platform == 'tv') ? detailMovie.name : detailMovie.title}</Text>
                    </Box>
                    <Box my={4}>
                        <Box display={{ base:"block", lg:"flex" }} alignItems={"center"} gap={5}>
                            <Box className="btnWatch" w={"full"} py={"15px"} borderRadius={'full'} color={"white"}>
                                <Flex gap={4} alignItems={"center"} justifyContent="center">
                                    <Image src={'/image/play.svg'}/>
                                    <Text className="textBtnWatch" fontSize={"lg"} color={"white"}>Watch</Text>
                                </Flex>
                            </Box>
                            <Box className="btnDownload" w={"full"} py={"15px"} borderRadius={'full'} color={"white"} mt={{ base:4, lg:0 }} bg={"whiteAlpha.100"}>
                                <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                                    <Image src={'/image/download.svg'}/>
                                    <Text className="textBtnDownload" fontSize={"lg"} color={"white"}>Download</Text>
                                </Flex>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Text color={'white'} fontWeight={"medium"} fontSize={"lg"} mt={"30px"} >Storyline</Text>
                        <Text color={'whiteAlpha.700'} mt={3}>{detailMovie.overview}</Text>
                    </Box>

                    <Box color={"white"} mt={5} fontSize={"md"}>
                        <Flex justifyContent={"start"} columnGap={5} alignItems={"center"} flexWrap={"wrap"} mb={5}>
                            <Text color={"whiteAlpha.700"} fontWeight={"semibold"}>Rating :</Text>
                            <Text fontWeight={"medium"}>{detailMovie.vote_average}</Text>
                        </Flex>
                        <Flex justifyContent={"start"} columnGap={5} alignItems={"center"} flexWrap={"wrap"} mb={5}>
                            <Text color={"whiteAlpha.700"} fontWeight={"semibold"}>Release Year :</Text>
                            <Text fontWeight={"medium"}>{detailMovie.release_date}</Text>
                        </Flex>
                        <Flex justifyContent={"start"} columnGap={5} alignItems={"center"} flexWrap={"wrap"} mb={5}>
                            <Text color={"whiteAlpha.700"} fontWeight={"semibold"}>Popularity :</Text>
                            <Text fontWeight={"medium"}>{detailMovie.popularity}</Text>
                        </Flex>
                        <Flex justifyContent={"start"} columnGap={5} alignItems={"center"} flexWrap={"wrap"} mb={5}>
                            <Text textAlign={"start"} color={"whiteAlpha.700"} fontWeight={"semibold"}>Genre :</Text>
                            <Text fontWeight={"medium"}>{genre.map((dataGenre) => `${dataGenre.name}, `)}</Text>
                        </Flex>
                        <Flex justifyContent={"start"} columnGap={5} alignItems={"center"} flexWrap={"wrap"} mb={5}>
                            <Text color={"whiteAlpha.700"} fontWeight={"semibold"}>Tagline :</Text>
                            <Text fontWeight={"medium"}>{detailMovie.tagline}</Text>
                        </Flex>
                    </Box>

                </GridItem>
                <GridItem pb={10} colSpan={{ base:6, md:6, lg:3 }} px={5} pt={10}>
                    <Text color={"white"} fontWeight={"medium"} fontSize={"lg"}>Production By</Text>
                    <Box display={{ base:"block", md:"flex" }} gap={5} flexWrap={"wrap"}>
                        {companies.map((dataCompany) => (
                        <Box w={{ base:"full", md:"50%" }} bg={"whiteAlpha.100"} borderRadius="full" mt={4}>
                                    <Flex justifyContent={"start"} alignItems={"center"} gap={5} px={5} py={3}>
                                        <Image width={"20%"} src={`https://image.tmdb.org/t/p/w500/${dataCompany.logo_path}`} />
                                        <Box>
                                            <Text color={"white"} fontWeight={"medium"}>{ dataCompany.name }</Text>
                                            <Text color={"whiteAlpha.800"} fontSize={'sm'} mt={1}>{ dataCompany.origin_country }</Text>
                                        </Box>
                                    </Flex>
                        </Box>
                        ))}
                    </Box>
                </GridItem>
        </Grid>
        </>
    )
}