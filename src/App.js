import React from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Stack } from '@chakra-ui/react';
import Profile from './components/Profile';
import Footer from './components/Footer'
import Doctor from './Pages/Doctor';
import Reviews from './components/Review.tsx'
import Appointement from './Pages/Appointement';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = () => {
  return (
    
     <BrowserRouter>
     <Stack direction='column'  spacing={24}>
    <Navbar></Navbar>
    <Routes>
     <Route exact path='/' element={<Doctor/>}></Route>
     <Route exact path='/appointement' element={<Appointement/>}></Route>
     <Route exact path='/appointement/reviews' element={<Reviews/>}></Route>
    

    </Routes>
   
     
    </Stack>
     
     </BrowserRouter>
  
      
      

  )
}

export default App