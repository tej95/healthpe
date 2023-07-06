import React,{useState} from 'react'
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Flex,
  Link,Box,chakra,Avatar,useColorMode,List,ListIcon,ListItem,useColorModeValue

} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'


const HeaderA = () => {
  
const [value, setValue] = useState(Date.now());
	
 
  return (
   <Flex >
    <Flex
    bg="#edf3f8"
    _dark={{
      bg: "#3e3e3e",
    }}
    p={5}
    maxW={'4xl'}
   
  >
    <Box
      bg="white"
      _dark={{
        bg: "gray.800",
      }}
      mx={{
        lg: 8,
      }}
      display={{
        lg: "flex",
      }}
      maxW={{
        lg: "5xl",
      }}
      shadow={{
        lg: "lg",
      }}
      rounded={{
        lg: "lg",
      }}
    >
      <Box
        w={{
          lg: "50%",
        }}
      >
        <Box>
           <Avatar size='3xl' my={4} mx={28}  name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
           <chakra.h2
          fontSize={{
            base: "md",
            md: "xl",
          }}
         pl={'6em'}
          color="gray.800"
          _dark={{
            color: "white",
          }}
          fontWeight='semibold'
         
        >
           Dr. {" "}
          <chakra.span
            color="brand.600"
            _dark={{
              color: "brand.400",
            }}
          >
           Raja Selvarajan
          </chakra.span>
        </chakra.h2>
           <Box  pl={16} py={2}>
          <List spacing={2}>
          
            
            <ListItem fontSize={'xs'}>
              {/* <ListIcon as={CheckIcon} color="green.400" /> */}
              MBBS, MD - Internal Medicine, FRCP
            </ListItem>
            <ListItem fontSize={'xs'}>
              {/* <ListIcon as={CheckIcon} color="green.400" /> */}
              General Physician, Internal Medicine,
Special Interest in Diabetology


            </ListItem>
            <ListItem fontSize={'xs'}>
              {/* <ListIcon as={CheckIcon} color="green.400" /> */}
             Text 17 Years Experience Overall  (13 years as specialist)
            </ListItem>
            {/* <ListItem fontSize={'xs'}>
              <ListIcon as={CheckIcon} color="green.400" />
              Medical Registration Verified
            </ListItem>
            <ListItem fontSize={'xs'}>
              <ListIcon as={CheckIcon} color="green.400" />
              95% (613 votes)
            </ListItem> */}
          </List>
          </Box>
           
        </Box>
      </Box>
  
      <Box
        py={12}
        px={6}
        maxW={{
          base: "xl",
          lg: "5xl",
        }}
        w={{
          lg: "50%",
        }}
      >
        <List spacing={2}>
            <ListItem fontSize={'xs'}>
              <ListIcon as={CheckIcon} color="green.400" />
              Medical Registration Verified
            </ListItem>
            <ListItem fontSize={'xs'}>
              <ListIcon as={CheckIcon} color="green.400" />
              95% (613 votes)
            </ListItem>
        </List>
        
       
        <chakra.p
          mt={4}
          fontSize={'xs'}
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
        >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nostrum? Voluptatibus magnam magni dignissimos eligendi laborum sit repudiandae porro quod. Voluptate qui earum corrupti ipsam impedit ut sapiente libero, temporibus dolorum eius ex quod, praesentium sit sed, perferendis doloremque consequatur excepturi rerum. Sed ducimus enim sequi magni blanditiis, eligendi laboriosam aliquid! Quam dolorum, officia quidem deserunt adipisci ut maxime iusto eum laudantium? Quasi sunt voluptatem dolores voluptates quam voluptatum odio laboriosam nam? Enim commodi atque praesentium vel nemo. Fugiat consectetur voluptas quisquam omnis nemo ducimus, quam minima autem quibusdam atque, minus eaque in nostrum id quaerat obcaecati cumque accusantium tenetur.
        </chakra.p>
  
        {/* <Box mt={8}>
          <Link
            bg="gray.900"
            color="gray.100"
            px={5}
            py={3}
            fontWeight="semibold"
            rounded="lg"
            _hover={{
              bg: "gray.800",
            }}
          >
            Start Now
          </Link>
        </Box> */}
      </Box>
    </Box>



  </Flex >
     
  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
          'MobileDatePicker',
          'DesktopDatePicker',
          'StaticDatePicker',
        ]}
      >
       
        <DemoItem label="Static variant">
          <StaticDatePicker value={value} onChange={(newValue)=>setValue(newValue)} defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider> */}
  {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Basic example"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />
                    }
                />
            </LocalizationProvider> */}

{/* 
  <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
          'MobileDatePicker',
          'DesktopDatePicker',
          'StaticDatePicker',
        ]}
      >
        <DemoItem label="Desktop variant">
          <DesktopDatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
        <DemoItem label="Mobile variant">
          <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
        <DemoItem label="Responsive variant">
          <DatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
        <DemoItem label="Static variant">
          <StaticDatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
			 */}
		
  </Flex>
  )
}

export default HeaderA