import {
    Box,
    Wrap,
    WrapItem,
    Avatar,
    Button,
    Divider,
    Heading,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { FaCheckCircle } from 'react-icons/fa';
  
  const options = [
    { id: 1, desc: '1 lorem ipsum',desc2: '1 lorem ipsum',desc3: '1 lorem ipsum' },
    { id: 2, desc: 'Lorem, ipsum dolor.' ,desc2: '1 lorem ipsum',desc3: '1 lorem ipsum'},
    { id: 3, desc: 'Monthly Updates',desc2: '1 lorem ipsum',desc3: '1 lorem ipsum' },
  ];
  interface PackageTierProps {
    title: string;
    options: Array<{ id: number; desc: string}>;
    typePlan: string;
    i: number;
    checked?: boolean;
  }
  const PackageTier = ({
    title,
    options,
    typePlan,
    i,
    checked = false,
  }: PackageTierProps) => {
    const colorTextLight = checked ? 'white' : 'purple.600';
    const bgColorLight = checked ? 'purple.400' : 'gray.300';
  
    const colorTextDark = checked ? 'white' : 'purple.500';
    const bgColorDark = checked ? 'purple.400' : 'gray.300';
    
    
    return (
        
      <Stack
        p={3}
        py={3}
        justifyContent={{
          base: 'flex-start',
          md: 'space-around',
        }}
        direction={{
          base: 'column',
          md: 'row',
        }}
        alignItems={{ md: 'center' }}>
        <Heading size={'md'}>{title}</Heading>
        <List spacing={3} textAlign="start">
          
            
           
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
           
            
            
           
          
        </List>
        <Heading size={'xl'}>{typePlan}</Heading>
        <Stack>
          <Link
           href='/appointement'
            size="md"
            rounded={'md'}
            px={3}
            py={2}
            color={useColorModeValue(colorTextLight, colorTextDark)}
            bgColor={useColorModeValue(bgColorLight, bgColorDark)}>
            Book Now
          </Link>
        </Stack>
      </Stack>
    );
  };
  const Doctor = () => {
    let i=0;
    return (
      <Box py={6} px={5} min={'100vh'}>
        <Stack spacing={4} width={'100%'} direction={'column'}>
          <Stack
            p={5}
            alignItems={'center'}
            justifyContent={{
              base: 'flex-start',
              md: 'space-around',
            }}
            direction={{
              base: 'column',
              md: 'row',
            }}>
            <Stack
              width={{
                base: '100%',
                md: '40%',
              }}
              textAlign={'center'}>
              <Heading size={'lg'}>
                The Right Stop for <Text color="purple.400">Your Need</Text>
              </Heading>
            </Stack>
            <Stack
              width={{
                base: '100%',
                md: '60%',
              }}>
              <Text textAlign={'center'}>
                Buy Medicines , Get Doctor Consultation and much more at the most afforfable prices . Order Now !
              </Text>
            </Stack>
          </Stack>
          <Divider />
          <PackageTier title={ <Wrap><WrapItem>
    <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
  </WrapItem>
</Wrap>} typePlan="$200.00" checked={true} options={options} />
          <Divider />
          <PackageTier
            title={<Wrap><WrapItem>
                <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
              </WrapItem>
            </Wrap>}
            checked={true}
            typePlan="$320.00"
            options={options}
          />
          <Divider />
          <PackageTier title={<Wrap><WrapItem>
    <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
  </WrapItem>
</Wrap>} typePlan="$500.00" checked={true} options={options} i={i++}/>
        </Stack>
      </Box>
    );
  };
  
  export default Doctor;