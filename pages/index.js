
import { Flex, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import Navbar from '../components/navbar'

const HomePage = () => {
    const { toggleColorMode } = useColorMode()
    const exampleColor = useColorModeValue("gray.100", "gray.700")

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
    <Flex height="150vh" justifyContent="center">
    
        <Navbar>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </Navbar>
    </Flex>

    )
}

export default HomePage
