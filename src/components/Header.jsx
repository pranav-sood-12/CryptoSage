import { Button, HStack } from '@chakra-ui/react';
import React from 'react';
import {Link} from "react-router-dom";


const Header = () => {
  return( 
    <HStack p={"4"} pl={'10'} shadow={"base"} bgColor={"blackAlpha.900"} spacing={"7"}>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchange">Exhanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;