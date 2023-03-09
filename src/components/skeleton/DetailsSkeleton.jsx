import { Box, Card, CardBody, CardHeader, Flex, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

export function SkeletonVideos()
{
    return (
        <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"100%"} h={52} />
    )
}

export function SkeletonVideosYoutube()
{
    return (
        <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} mx={"auto"} w={"80%"} h={52} />
    )
}

export default function DetailsMobileSkeleton()
{
    return (
        <Card bg={"transparent"} borderRadius={"15px"} overflow={"hidden"} border={"none"} outline={"none"} className="">
            <CardHeader px={4} m={0} pt={4}>
            <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"100%"} h={52} borderRadius={"15px"} />
            </CardHeader>
            <CardBody px={4} pb={4} pt={0} m={0}>
            <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"90%"} h={10} mx={"auto"} borderRadius={"15px"} />

            <Flex justifyContent={"space-around"} alignItems={"center"} my={5}>
                <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"12%"} h={10} borderRadius={"full"} my={3} />
                <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"12%"} h={10} borderRadius={"full"} my={3} />
                <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"12%"} h={10} borderRadius={"full"} my={3} />
            </Flex>
            <SkeletonText px={5} startColor='whiteAlpha.200' borderRadius={"full"} width={"70%"} endColor={"whiteAlpha.300"} mt='4' noOfLines={1} spacing='4' skeletonHeight='5' />

            <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"90%"} h={10} mx={"auto"} borderRadius={"15px"} mt={5} />
            <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"90%"} h={10} mx={"auto"} borderRadius={"15px"} mt={5} />

            <SkeletonText px={5} startColor='whiteAlpha.200' borderRadius={"full"} width={"50%"} endColor={"whiteAlpha.300"} mt='10' noOfLines={1} spacing='4' skeletonHeight='5' />
            <SkeletonText px={5} startColor='whiteAlpha.200' borderRadius={"full"} width={"100%"} endColor={"whiteAlpha.300"} mt='10' noOfLines={5} spacing='4' skeletonHeight='2' />

            </CardBody>
        </Card>
    )
}