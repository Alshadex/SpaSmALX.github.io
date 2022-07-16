
import { Flex, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'

const HomePage = () => {
    const { toggleColorMode } = useColorMode()
    const exampleColor = useColorModeValue("gray.100", "gray.700")

    return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
        <button onClick={toggleColorMode}>Toggle Theme</button>
        <Flex direction="column" background={exampleColor} p={12} rounded={6}>
            <Heading mb={6}>
                Login
            </Heading>
            <Link href="/projects">My Projects</Link>
        </Flex>
    </Flex>
    )
}

export default HomePage
