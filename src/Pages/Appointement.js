import React from 'react'
import HeaderA from '../components/HeaderA'
import Header from '../components/Header';
import Reviews from '../components/Review.tsx'
import { Link } from "react-router-dom";
import Footer from '../components/Footer'
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import TabS from '../components/TabS.js';
import Calender from '../components/Calender';

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

const Appointement = () => {
  return (
    <>
    <Header></Header>
    <HeaderA/>
   <TabS></TabS>
   <Footer></Footer>
   <Calender></Calender>
    
    </>

  )
}

export default Appointement