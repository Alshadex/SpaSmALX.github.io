import {
  Container,
  Box,
  Link,
  Stack,
  useColorModeValue,
  Flex
} from '@chakra-ui/react'

const Layout = (children) => {
    return (
            <Box
                display="flex"
                // marginTop={19}
                h="100vh"
                w="100%"
                bg="#151E25"
            >
              <Container
              display="flex"
              bg="#FFE6CF"
              maxW="container.md"
              marginTop={20}
              marginBottom={3}
              borderRadius={10}
                {...children}
              >
              </Container>
            </Box>
    )
}

export default Layout
