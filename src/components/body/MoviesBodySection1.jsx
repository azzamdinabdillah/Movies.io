import { StarIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, CardFooter, CardHeader, Text, Image, Flex, Button, Stack, Skeleton } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
import MoviesSectionSkeleton, { SkeletonDesktop, SkeletonTab } from "../skeleton/MoviesSectionSkeleton";

export default function MoviesBodySection1()
{
    const apiKey = "deaa900ca3b05a88dd6821f011977eea";

    let [topRated, setTopRated] = useState([]);
    let [loading, setLoading] = useState(true);
    let [loaded, isLoaded] = useState(false);
    let [genres, setGenres] = useState([]);

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=" + apiKey).then((response) => {
            setTopRated(response.data.results);
            setLoading(false);
            // console.log(response.data.results[0]);
        });

        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`).then((response) => {
            setGenres(response.data.genres);
            // console.log(response.data.genres);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        (loading == true) 
        ?  (window.innerWidth <= 768) ? <MoviesSectionSkeleton/> : (window.innerWidth >= 768 && window.innerWidth <= 1024) ? <SkeletonTab/> : (window.innerWidth >= 1024) ? <SkeletonDesktop/> : <MoviesSectionSkeleton/>
        : <Box pt={10} px={{ base:5, md:"14", lg:"32" }}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Text color={"white"} fontSize={"lg"} fontWeight={"semibold"}>Top Rated Movies</Text>

            <Box className="animate-goyang">
                <Flex gap={2} alignItems={"center"}>    
                    <Text fontSize={"xs"} color={"yellow.200"} fontWeight={"medium"} >
                        Swipe For More
                    </Text>
                    <ArrowForwardIcon color={"yellow.200"} boxSize={"5"} />
                </Flex>
            </Box>
        </Flex>

     <Swiper
            slidesPerView={(window.innerWidth <= 768) ? '1.7' : (window.innerWidth >= 768 && window.innerWidth <= 1024) ? '4.2' : (window.innerWidth >= 1024) ? '5.2' : '1.7' }
            spaceBetween={20}
            centeredSlides={false}
            // pagination={{
            // clickable: true,
            // }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {topRated.map((data) => (
            <SwiperSlide className="">
                <Card bg={"whiteAlpha.100"} mt={7} borderRadius={"15px"} overflow={"hidden"} border={"none"} outline={"none"} className="">
                    <CardHeader p={0} m={0}>
                        <Image src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
                    </CardHeader>

                    <CardBody>
                        <Link className="text-white hover:underline" to={`/details/movie/${data.id}`} display={"inline-block"} variant={"link"} colorScheme={"yellow"} fontSize={"md"} color={"white"} fontWeight={"medium"}>
                            { data.title }
                        </Link>
                        <Text my={1} color={"gray.300"} fontSize={"smaller"} fontWeight={"medium"}>
                            { data.vote_average }
                        </Text>
                        <Text color={"gray.300"} fontSize={"smaller"} fontWeight={"medium"}>
                            { data.release_date }
                        </Text>

                        <Box mt={2}>
                            { data.genre_ids.map((genreId) => (
                                <Text color={"gray.300"} display={"inline"} fontSize={"smaller"} fontWeight={"medium"}>
                                    { genres.find((genre) => genre.id === genreId)?.name + ', ' }
                                </Text>
                            )) }
                        </Box>

                        <Flex gap={2} my={4}>
                            <StarIcon color={"yellow.400"} />
                            <StarIcon color={"yellow.400"} />
                            <StarIcon color={"yellow.400"} />
                            <StarIcon color={"yellow.400"} />
                            <StarIcon color={"yellow.400"} />
                        </Flex>
                    </CardBody>

                </Card>
            </SwiperSlide>
            ))}
    </Swiper>

            </Box>

        
    )
}