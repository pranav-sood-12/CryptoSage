import { Box, HStack, Image, Text, VStack, baseTheme,Stack, useMediaQuery, Flex } from '@chakra-ui/react'
// import { useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import homeImage from '../assets/yoyo.jpg'



const Home = () => {
  // let isNotSmallerScreen = window.innerWidth;
  const [isNotSmallerScreen] = useMediaQuery('(min-width:790px)')
// console.log(windowSize);
  return (
    <Stack direction={ [ "column","row" ]} bgColor={"white"} justifyContent={"space-between"} alignItems={"center"} h={["full"]}>
      {/* <VStack w={"full"} alignItems={["center", "flex-start"]}>
        <Text fontSize={"6xl"} textAlign={"center"} fontWeight={"thin"} color={"blackAlpha.900"} m={"10"}>CryptoSage</Text>
        <Text flexWrap={"wrap"} fontSize={"4xl"} fontWeight={"thin"} color={"black"} w={["md","sm"]} m={"10"} textAlign={["center", "left"]}>Join the Community: Engage with a vibrant community of crypto enthusiasts, experts, and newcomers.</Text>
      </VStack> */}
      <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontSize={['sm', 'md', 'lg', '2xl']} fontWeight={"semibold"} color={"blackAlpha.900"} m={"5"}>CryptoSage</Text>
          <Text
            fontSize={['sm', 'md', 'lg', 'xl']}
            textAlign={["center", "left"]}
            fontWeight={"thin"} 
            m={"5"}
            // w={["2/5"]}
            // w={"xs"}
            // minW={"2xs"}
          >
            Join the Community: Engage with a vibrant community of crypto enthusiasts, experts, and newcomers.
          </Text>
        </VStack>
      <Stack direction={isNotSmallerScreen ? "row" : "column"}>
        <Image objectFit={"contain"} src={homeImage}  minH={"full"} alt='PRANAV SOOD'/>
      </Stack>
    </Stack>
  )
}

export default Home