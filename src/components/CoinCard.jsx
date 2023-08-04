import { VStack ,Image,Heading,Text} from '@chakra-ui/react';
import React from 'react'
import {Link} from "react-router-dom"

//we can also send here all the stuff directly and can use name id without writing props. again and again

const CoinCard = (props) =>
(
  <Link to={`/coins/${props.id}`}>
  <VStack width={52} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"} 
  css={{
    "&:hover":{
      transform:"scale(1.1)",
    }
  }}>
    <Image src={props.img} w={"10"} h={"10"} objectFit={"contain"}/>
    <Heading size={"md"} noOfLines={1}>{props.symbol}</Heading>
    <Text noOfLines={1}>{props.name}</Text>
    <Text noOfLines={1}>{props.price? `${props.currencySymbol}${props.price}` :"NA"}</Text>

  </VStack>
  </Link>
);

export default CoinCard