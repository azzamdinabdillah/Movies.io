import { Box, Card, CardBody, CardHeader, Flex, Skeleton, SkeletonText } from "@chakra-ui/react";

export function SkeletonMobileHeader()
{
    return (
        <Card w={"full"} bg={"whiteAlpha.100"} mb={7} overflow={"hidden"} border={"none"} outline={"none"} className="">
        <Flex justifyContent={"end"} w={"full"} pt={5} pr={5}>
            <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"30%"} h={2} />
        </Flex>
          <CardHeader px={4} m={0} pt={'32'}>
            <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"100%"} h={10} borderRadius={"15px"} />
          </CardHeader>
          <CardBody px={4} pb={4} pt={0} m={0}>
            <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"80%"} h={3} borderRadius={"15px"} />
            <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"60%"} h={2} borderRadius={"15px"} my={3} />
            <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"70%"} h={2} borderRadius={"15px"} my={3} />
            <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"80%"} h={2} borderRadius={"15px"} my={3} />
            <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"90%"} h={2} borderRadius={"15px"} my={3} />
            <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"100%"} h={2} borderRadius={"15px"} my={3} />
            <Flex gap={5}>
              <Skeleton mt={5} startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={8} borderRadius={"15px"} />
              <Skeleton mt={5} startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={8} borderRadius={"15px"} />
            </Flex>
          </CardBody>
      </Card>
    )
}

export function SkeletonDesktopHeader()
{
    return (
        <Flex justifyContent={"center"} alignItems={"center"} gap={10} mb={32}>
            <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"25%"} h={"80vh"} borderRadius={"15px"} />

            <Box w={"50%"}>
                <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={10} borderRadius={"15px"} />
                <Skeleton my={5} startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"30%"} h={5} borderRadius={"15px"} />
                <SkeletonText startColor='whiteAlpha.200' borderRadius={"full"} width={"70%"} endColor={"whiteAlpha.300"} mt='4' noOfLines={7} spacing='4' skeletonHeight='4' />
                <Flex gap={5} mt={5}>
                <Skeleton mt={5} startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"20%"} h={8} borderRadius={"15px"} />
                <Skeleton mt={5} startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"20%"} h={8} borderRadius={"15px"} />
                </Flex>
            </Box>
        </Flex>
    )
}

export function SkeletonDesktop(){
    return (
        <>
        <Skeleton mb={10} mx={32} startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={3} borderRadius={"15px"} />
        <div className='grid grid-cols-5 gap-3 px-32 mb-10'>
            <Card bg={"whiteAlpha.100"} borderRadius={"15px"} overflow={"hidden"} border={"none"} outline={"none"} className="">
                  <CardHeader px={4} m={0} pt={4}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"100%"} h={52} borderRadius={"15px"} />
                  </CardHeader>
                  <CardBody px={4} pb={4} pt={0} m={0}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"80%"} h={3} borderRadius={"15px"} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"60%"} h={3} borderRadius={"15px"} my={3} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={3} borderRadius={"15px"} />
                  </CardBody>
              </Card>
            <Card bg={"whiteAlpha.100"} borderRadius={"15px"} overflow={"hidden"} border={"none"} outline={"none"} className="">
                  <CardHeader px={4} m={0} pt={4}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"100%"} h={52} borderRadius={"15px"} />
                  </CardHeader>
                  <CardBody px={4} pb={4} pt={0} m={0}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"80%"} h={3} borderRadius={"15px"} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"60%"} h={3} borderRadius={"15px"} my={3} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={3} borderRadius={"15px"} />
                  </CardBody>
              </Card>
            <Card bg={"whiteAlpha.100"} borderRadius={"15px"} overflow={"hidden"} border={"none"} outline={"none"} className="">
                  <CardHeader px={4} m={0} pt={4}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"100%"} h={52} borderRadius={"15px"} />
                  </CardHeader>
                  <CardBody px={4} pb={4} pt={0} m={0}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"80%"} h={3} borderRadius={"15px"} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"60%"} h={3} borderRadius={"15px"} my={3} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={3} borderRadius={"15px"} />
                  </CardBody>
              </Card>
            <Card bg={"whiteAlpha.100"} borderRadius={"15px"} overflow={"hidden"} border={"none"} outline={"none"} className="">
                  <CardHeader px={4} m={0} pt={4}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"100%"} h={52} borderRadius={"15px"} />
                  </CardHeader>
                  <CardBody px={4} pb={4} pt={0} m={0}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"80%"} h={3} borderRadius={"15px"} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"60%"} h={3} borderRadius={"15px"} my={3} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={3} borderRadius={"15px"} />
                  </CardBody>
              </Card>
            <Card bg={"whiteAlpha.100"} borderRadius={"15px"} overflow={"hidden"} border={"none"} outline={"none"} className="">
                  <CardHeader px={4} m={0} pt={4}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"100%"} h={52} borderRadius={"15px"} />
                  </CardHeader>
                  <CardBody px={4} pb={4} pt={0} m={0}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"80%"} h={3} borderRadius={"15px"} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"60%"} h={3} borderRadius={"15px"} my={3} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={3} borderRadius={"15px"} />
                  </CardBody>
              </Card>
          </div>
        </>
    )
}

export function SkeletonTab()
{
    return (
        <>
        <Skeleton mb={10} mx={10} startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={3} borderRadius={"15px"} />
        <div className='grid grid-cols-4 gap-3 px-10 mb-10'>
            <Card bg={"whiteAlpha.100"} borderRadius={"15px"} overflow={"hidden"} border={"none"} outline={"none"} className="">
                  <CardHeader px={4} m={0} pt={4}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"100%"} h={52} borderRadius={"15px"} />
                  </CardHeader>
                  <CardBody px={4} pb={4} pt={0} m={0}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"80%"} h={3} borderRadius={"15px"} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"60%"} h={3} borderRadius={"15px"} my={3} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={3} borderRadius={"15px"} />
                  </CardBody>
              </Card>
            <Card bg={"whiteAlpha.100"} borderRadius={"15px"} overflow={"hidden"} border={"none"} outline={"none"} className="">
                  <CardHeader px={4} m={0} pt={4}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"100%"} h={52} borderRadius={"15px"} />
                  </CardHeader>
                  <CardBody px={4} pb={4} pt={0} m={0}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"80%"} h={3} borderRadius={"15px"} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"60%"} h={3} borderRadius={"15px"} my={3} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={3} borderRadius={"15px"} />
                  </CardBody>
              </Card>
            <Card bg={"whiteAlpha.100"} borderRadius={"15px"} overflow={"hidden"} border={"none"} outline={"none"} className="">
                  <CardHeader px={4} m={0} pt={4}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"100%"} h={52} borderRadius={"15px"} />
                  </CardHeader>
                  <CardBody px={4} pb={4} pt={0} m={0}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"80%"} h={3} borderRadius={"15px"} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"60%"} h={3} borderRadius={"15px"} my={3} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={3} borderRadius={"15px"} />
                  </CardBody>
              </Card>
            <Card bg={"whiteAlpha.100"} borderRadius={"15px"} overflow={"hidden"} border={"none"} outline={"none"} className="">
                  <CardHeader px={4} m={0} pt={4}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"100%"} h={52} borderRadius={"15px"} />
                  </CardHeader>
                  <CardBody px={4} pb={4} pt={0} m={0}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"80%"} h={3} borderRadius={"15px"} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"60%"} h={3} borderRadius={"15px"} my={3} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={3} borderRadius={"15px"} />
                  </CardBody>
              </Card>
          </div>
        </>
    )
}


export default function MoviesSectionSkeleton()
{
    return (
        <>
        <Skeleton mb={10} mx={5} startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={3} borderRadius={"15px"} />
        <div className='grid grid-cols-2 gap-3 px-5 mb-10'>
            <Card bg={"whiteAlpha.100"} borderRadius={"15px"} overflow={"hidden"} border={"none"} outline={"none"} className="">
                  <CardHeader px={4} m={0} pt={4}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"100%"} h={52} borderRadius={"15px"} />
                  </CardHeader>
                  <CardBody px={4} pb={4} pt={0} m={0}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"80%"} h={3} borderRadius={"15px"} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"60%"} h={3} borderRadius={"15px"} my={3} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={3} borderRadius={"15px"} />
                  </CardBody>
              </Card>
            <Card bg={"whiteAlpha.100"} borderRadius={"15px"} overflow={"hidden"} border={"none"} outline={"none"} className="">
                  <CardHeader px={4} m={0} pt={4}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"100%"} h={52} borderRadius={"15px"} />
                  </CardHeader>
                  <CardBody px={4} pb={4} pt={0} m={0}>
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"80%"} h={3} borderRadius={"15px"} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"60%"} h={3} borderRadius={"15px"} my={3} />
                  <Skeleton startColor='whiteAlpha.200' endColor={"whiteAlpha.300"} w={"40%"} h={3} borderRadius={"15px"} />
                  </CardBody>
              </Card>
          </div>
        </>
    )
}