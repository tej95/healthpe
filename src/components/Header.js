import React from 'react'
import '../App.css'
import { useState } from 'react';
import { Input, Image } from '@chakra-ui/react'
import {  InputGroup,InputLeftAddon,InputRightAddon } from '@chakra-ui/react';
import { Container , Center} from '@chakra-ui/react';
import { SunIcon, SearchIcon, CalendarIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope, faTooth, faMicroscope ,faPills , faLocationDot , faSearch} from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  VStack,
  Card,
  CardBody,
  Textarea,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Spacer
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';


const DesktopSubNav = ({ label, href, subLabel  }: NavItem) => {
  
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text 
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const Header = () => {
  const doctorData = [
    {
      name: 'Joe Rogan',
      experience: '4',
      stars: '4.5',
      hospital: 'Joe Rogan Experience',
      fees: '$1200 per hour'
  
  
  
  
    },
    {
      name: 'Joe Rogan',
      experience: '4',
      stars: '4.5',
      hospital: 'Joe Rogan Experience',
      fees: '$1200 per hour'
  
  
  
  
    },
    {
      name: 'Joe Rogan',
      experience: '4',
      stars: '4.5',
      hospital: 'Joe Rogan Experience',
      fees: '$1200 per hour'
  
  
  
  
    },
    
  
  
  
  
  ];
  const [value, setValue] = useState('');
  const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  return (
    <>
    <Container centerContent borderWidth='1px' borderRadius='lg' p={1} overflow='hidden' minW={{base:'sm',md:'lg'}} > 
    <Stack direction={'row'} spacing={{base:1, md:10}}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label} p={{base:1, md:3}} >
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
             
                <Link
               
                  p={1}
                 
                  href='#'
                  fontSize={18}
                  fontWeight={500}
                 
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                     <FontAwesomeIcon className='icon' border='1px' borderColor='black.200' size={"2xl"} icon={navItem.label} />
                     <Text mt={2} ml={3} mb={-8} fontSize='sm'>{navItem.sublabel}</Text>
                 
                </Link>
               
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav setValue key={child.label} {...child}  />
                      
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    </Container>
    <Stack spacing={4}>
    {/* <InputGroup>
      <InputLeftAddon children='+234' />
      <Input type='tel' placeholder='phone number' />
    </InputGroup> */}
  
    {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
    <Container maxW={{base:'xl',md:'2xl'}} centerContent>
    <InputGroup size={{base:'md',md:'lg'}} >
      <InputLeftAddon children={<><FontAwesomeIcon icon={faLocationDot} /> <Input  htmlSize={4} width='auto'  />
      
      
      </>} />
    
      
      <Input  placeholder={ 'Search Hospitals, clinics and Doctors'} onChange={value}/>
      
     
      <InputRightAddon children={<CalendarIcon/>} />
    </InputGroup></Container>

  </Stack>
  {/* <VStack >
   {doctorData.map((child,index)=>(
   <Container maxW={'3xl'}>
     <Card maxW={'4xl'} key={index}>
   <CardBody>
     <Text>{child.name}</Text>
   </CardBody>
 </Card>
   </Container>
  

   ))}
    <Box></Box>
  </VStack> */}
  </>
  )
}
interface NavItem {
  
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: faStethoscope,
    sublabel: 'Doctors',
    children: [
      {
        label: 'General Physician And Specialists',
        
        href: '#',
      },
      {
        label: 'Ophthalmologist',
        
        href: '#',
      },
      {
        label: 'Dermatologist',
        
        href: '#',
      },
      {
        label: 'Cardiologist',
       
        href: '#',
      },
      {
        label: 'Psychiatrist',
       
        href: '#',
      },
      {
        label: 'Gastroenterologist',
      
        href: '#',
      },
      {
        label: 'Ear-Nose-Throat(ENT)',
       
        href: '#',
      },
      {
        label: 'Gynecologist',
        
        href: '#',
      },
      {
        label: 'Neurologist',
       
        href: '#',
      },
      {
        label: 'Urologist',
       
        href: '#',
      },
     
    ],
  },
  {
    label: faTooth,
    sublabel: 'Dental',
    
  },
  {
    label: faMicroscope,
    sublabel: 'Lab Test',
    href: '#',
  },
  {
    label: faPills,
    sublabel: 'Medicine',
    href: '#',
  },
];



export default Header