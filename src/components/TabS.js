import React from 'react'
import Reviews from '../components/Review.tsx'
import Qna from '../components/QNA.js'

import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels
} from '@chakra-ui/react';

const TabS = () => {
  return (
    <>
   
    <Flex
    bg="#edf3f8"
    _dark={{
      bg: "#3e3e3e",
    }}
    p={1}
    maxW={'3xl'}
      textAlign={'center'}
      pt={1}

      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      overflow={'hidden'}>



<Tabs variant='solid-rounded' colorScheme='green' isFitted >
  <TabList mx={'12em'} px={10} >
    <Tab m={4}>Reviews</Tab>
    <Tab m={4}>Q&A</Tab>
    <Tab m={4} >Stories</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <chakra.p><Reviews/></chakra.p>
    </TabPanel>
    <TabPanel>
      <chakra.p><Qna/></chakra.p>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Flex>
    
    </>

  )
}

export default TabS