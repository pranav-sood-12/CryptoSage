import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {server} from "../index"
import { Container, HStack, Heading, VStack,Image,Text} from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';


const Exchange = () => {

    const [exchanges,setExchanges] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] =useState(false);

  useEffect(() => {
    const fetchExchanges = async()=>{
      try {
        // here in api its array inside which data of exchanges is present so we destructure it or otherwise we can send data.data to the setExchanges
        const {data} = await axios.get(`${server}/exchanges`)

      setExchanges(data);
      // console.log(data);
      setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchExchanges();
  }, [])
  
const ExchangeCard = ({name,img,rank,url}) =>
(
  <a href={url} target={"blank"}>
  <VStack width={52} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"} 
  css={{
    "&:hover":{
      transform:"scale(1.1)",
    }
  }}>
    <Image src={img} w={"10"} h={"10"} objectFit={"contain"}/>
    <Heading size={"md"} noOfLines={1}>{rank}</Heading>
    <Text noOfLines={1}>{name}</Text>
  </VStack>
  </a>
);

  if(error) return <ErrorComponent message={"error while fetching"}/>
  
  return (
    <Container maxW={"container.xl"}>
        {

        loading?<Loader/> : 
        <>
          <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
            {
              exchanges.map((i)=>(
                <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url}/>
              ))}
          </HStack>
        </>
      }

    </Container>
  )
}


export default Exchange