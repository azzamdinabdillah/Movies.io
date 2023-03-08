import { StarIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, CardHeader, Flex, Image, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Form, Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function Search()
{   
    let [query, setQuery] = useState();
    let [movies, setMovies] = useState([]);

    function queryHandler(even)
    {
        setQuery(even.target.value);

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=deaa900ca3b05a88dd6821f011977eea&query=${query}`).then((response) => {
            // console.log(response.data.results);
            setMovies(response.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
            <Navbar/>
            <Box h={(movies.length <= 0) ? "100vh" : "100%"} color={"white"} px={{ base:3, md:10, lg:20 }} pb={20}>
                <Form className="pt-2">
                    <Input autoComplete="off" placeholder="Search Movie by Title" _placeholder={{ color:"white", fontWeight:"medium" }} name="query" onChange={queryHandler} />
                </Form>

                {(movies.length <= 0) ? <Text mt={10} textAlign={"center"} fontWeight={"medium"}>Please enter the input correctly</Text> 
                : <div className="grid grid-cols-2 gap-3 md:gap-10 md:grid-cols-4 lg:grid-cols-6">
                    {movies.map((data) => (
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

                                {/* <Box mt={2}>
                                { data.genre_ids.map((genreId) => (
                                    <Text color={"gray.300"} display={"inline"} fontSize={"smaller"} fontWeight={"medium"}>
                                        { genres.find((genre) => genre.id === genreId)?.name + ', ' }
                                    </Text>
                                )) }
                                </Box> */}

                                <Flex gap={2} my={4}>
                                    <StarIcon color={"yellow.400"} />
                                    <StarIcon color={"yellow.400"} />
                                    <StarIcon color={"yellow.400"} />
                                    <StarIcon color={"yellow.400"} />
                                    <StarIcon color={"yellow.400"} />
                                </Flex>
                            </CardBody>

                        </Card>
                    ))}
                </div>
                }
            </Box>
        </>
    )
}