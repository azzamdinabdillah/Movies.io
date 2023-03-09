import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Image, Text, Flex, Button, Skeleton, Card, CardHeader, CardBody } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// import required modules
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import { ArrowForwardIcon, InfoIcon, ViewIcon } from "@chakra-ui/icons";
import { SkeletonDesktopHeader, SkeletonMobileHeader } from "../skeleton/MoviesSectionSkeleton";

export default function SliderImage()
{
    const apiKey = "deaa900ca3b05a88dd6821f011977eea";

    let [nowPlaying, setNowPlaying] = useState([]);
    let [genre, setGenre] = useState([]);
    let [genres, setGenres] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=" + apiKey).then((response) => {
            // return response;
            setNowPlaying(response.data.results);
            // console.log(response.data.results);
            setGenre(response.data.results);
            setLoading(false);
            // console.log(genre);
        });

        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`).then((response) => {
            setGenres(response.data.genres);
            // console.log(response.data.genres);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        (loading == true) 
        ? (window.innerWidth <= 768) ? <SkeletonMobileHeader/> : (window.innerWidth >= 768 && window.innerWidth <= 1024) ? <SkeletonMobileHeader/> : (window.innerWidth >= 1024) ? <SkeletonDesktopHeader/> : <SkeletonMobileHeader/>
    :
        <>
            <Swiper autoplay={{ delay:3000, disableOnInteraction:false }} pagination={true} navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper w-full h-[70vh] md:h-[50vh] lg:h-[80vh] lg:my-10">
                {nowPlaying.map((data) => (
                    <SwiperSlide className="w-full">
                        <Box boxSize={"full"} objectFit={"cover"} position={{ base:"relative", lg:"static" }} display={"flex"} justifyContent={"start"} alignItems={"center"} className="lg:pl-32">
                            <Image src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} w={"full"} boxSize={"full"} objectFit={{ base:"cover", lg:"contain" }} objectPosition={{ base:"center", lg:"left" }} filter='auto' brightness={{ base:"50%", lg:"80%" }} borderRadius={{ base:0, lg:"10px" }} />

                            <Box position={{ base:"absolute", lg:"static" }} padding={{ base:5, md:10 }} className="bottom-10 flex-shrink-0">
                                <Text color={"white"} fontWeight={"bold"} fontSize={{ base:"3xl", md:"4xl" }} >{ data.title }</Text>

                                <Box mt={2}>
                                    { data.genre_ids.map((genreId) => (
                                        <Text color={"yellow.300"} display={"inline"} fontSize={"md"} fontWeight={"semibold"}>
                                            { genres.find((genre) => genre.id === genreId)?.name + ', ' }
                                        </Text>
                                    )) }
                                </Box>

                                <Text mt={3} color={"gray.200"} fontWeight={"medium"} fontSize={{ base:"sm", md:"md" }} width={{ base:"100%", md:"70%", lg:"30%" }} pr={{ base:0, lg:"100px" }} >{ data.overview }</Text>


                                <Box display={{ base:"none", lg:"block" }} mt={5}>
                                    <Flex alignItems={"center"} gap={2} fontSize={"sm"}>
                                        {/* <FcRating size={"20px"} /> */}
                                        <Text fontWeight={"medium"} color={"white"}>Popularity : </Text>
                                        <Text color={"gray.200"}>{ data.popularity }</Text>
                                    </Flex>
                                    <Flex alignItems={"center"} gap={2} fontSize={"sm"} mt={3}>
                                        {/* <FcRating size={"20px"} /> */}
                                        <Text fontWeight={"medium"} color={"white"}>Rating : </Text>
                                        <Text color={"gray.200"}>{ data.vote_average }</Text>
                                    </Flex>
                                    <Flex alignItems={"center"} gap={2} fontSize={"sm"} mt={3}>
                                        {/* <FcRating size={"20px"} /> */}
                                        <Text fontWeight={"medium"} color={"white"}>Realese Date : </Text>
                                        <Text color={"gray.200"}>{ data.release_date }</Text>
                                    </Flex>
                                </Box>

                                <Flex gap={3} mt={5}>
                                    <Link to={`/details/movie/${data.id}#watch`}>
                                        <Button colorScheme={"yellow"} leftIcon={<ViewIcon/>}>
                                            Play Now
                                        </Button>
                                    </Link>
                                    <Link to={`/details/movie/${data.id}`}>
                                        <Button className="text-white hover:text-black" color={"white"} variant={"outline"} leftIcon={<InfoIcon/>}>
                                            Details
                                        </Button>
                                    </Link>
                                </Flex>
                            </Box>

                            <Box position={"absolute"} display={{ base:"block", lg:"none" }} padding={5} top={2} right={2} className="animate-goyang">
                                <Flex gap={2} alignItems={"center"}>    
                                    <Text fontSize={"xs"} color={"yellow.200"} fontWeight={"medium"} >
                                        Swipe For More
                                    </Text>
                                    <ArrowForwardIcon color={"yellow.200"} boxSize={"5"} />
                                </Flex>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}