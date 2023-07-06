import React from 'react'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Stack } from '@chakra-ui/react';
import Profile from '../components/Profile';
import Footer from '../components/Footer'

const Doctor = () => {
  return (
    <>
    <Stack direction='column'  spacing={24}>
    
      <Header></Header>
      <Profile></Profile>
      <Footer></Footer>

    </Stack>
      
      </>
   

  )
}

export default Doctor