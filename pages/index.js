
import { 
    Container,
    Flex, 
    useColorMode, 
    useColorModeValue 
} from '@chakra-ui/react'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Layout from '../components/layout'


const HomePage = () => {
    return (
    // <Flex height="100vh" alignItems="center" justifyContent="center">
    //     <Navbar ></Navbar>
    //     <button onClick={toggleColorMode}>Toggle Theme</button> */}
    //     <Flex direction="column" background={exampleColor} p={12} rounded={6}>
    //         <Heading mb={6}>
    //             Login
    //         </Heading>
    //         <Link href="/projects">My Projects</Link>
    //     </Flex>
    // </Flex>
    <Flex height="100vh">
        <Navbar>
        </Navbar>
        <Layout>
            <Container
            // display='flex'
            marginTop={10}
            marginLeft={10}
            >
                    <Image
                        src="/profile.jpg"
                        height="170"
                        width="170"
                        className="rounded-full">
                    </Image>

            </Container>
        </Layout>
    </Flex>
    
    )
}

export default HomePage
