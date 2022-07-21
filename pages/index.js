
import { 
    Image,
    Box,
    Container,
    Flex,
    Heading,
    useColorMode, 
    useColorModeValue, 
    VStack
} from '@chakra-ui/react'
import Navbar from '../components/navbar'
import Layout from '../components/layout'


const HomePage = () => {
    return (
    <Flex height="100vh">
        <Navbar>
        </Navbar>
        <Layout>
            <Container
            bg='blue.100'
            display='flex'
            marginTop={10}
            // marginLeft={10}
            // marginRight={-101}
            >
               <Box boxSize='150px'>
                <Image 
                    src='/profile.jpg'
                    borderRadius='full'
                    />
                </Box> 

                <VStack>
                <Container
                    marginLeft={5}
                    // bg="red.100"
                    >
                    <Heading fontSize='35px'>
                        Alex Lin
                    </Heading>
                    <Box
                        borderRadius={15}
                        mb={0}
                        p={3}
                        textAlign="center"
                        bg="#F9ECE1"
                    >
                        Hello, I&apos;m a software engineer and systems architect!
                    </Box>
                </Container>
            </VStack>
            </Container>
        </Layout>
    </Flex>
    
    )
}

export default HomePage
