import {
  Container,
  Box,
  Link,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'


const LinkItem = ({ href, path, target, children, ...props }) => {
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={4}
        color="#fffff"
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      display="flex"
      as="nav"
      w="100%"
      bg="#4B475A"
      {...props}
    >
      <Container
        bg="#4DA4AF"
        display="flex"
        maxW="container.md"
        // wrap="wrap"
        // align="center"
        marginTop="2"
        marginBottom="2"
        // justify="space-between"
        alignItems="center"
        justifyContent="left"
        borderRadius="5"
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
        >

          <LinkItem href="/" path={path} marginLeft={10}>
            <strong>Alex Lin</strong>
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            <strong>Works</strong>
          </LinkItem>

          <LinkItem 
            target="_blank"
            href="/Alex Lin Resume.pdf" path={path}>
            <strong>Resume</strong>
          </LinkItem>

          <LinkItem
            target="_blank"
            href="https://github.com/SpaSmALX/SpaSmALX.github.io"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 6 }}
            pl={2}
          >
            <IoLogoGithub />
            <strong>Source</strong>
          </LinkItem>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
