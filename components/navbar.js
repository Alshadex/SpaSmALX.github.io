import {
  Container,
  Box,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  IconButton,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'
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
      zIndex={2}
      {...props}
    >
      <Container
        bg="#4DA4AF"
        display="flex"
        maxW="container.md"
        wrap="wrap"
        align="center"
        marginTop="2"
        marginBottom="2"
        justify="space-between"
        alignItems="center"
        justifyContent="left"
        borderRadius="15"
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >

          <LinkItem href="/" path={path} marginLeft={10}>
            <strong>About</strong>
          </LinkItem>
          <LinkItem href="/works" path={path}>
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
        <Box flex={1} align="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/Alex Lin Resume.pdf" passHref>
                  <MenuItem 
                  target="_blank"
                  as={Link}>Resume</MenuItem>
                </NextLink>
                <MenuItem
                  target="_blank"
                  as={Link}
                  href="https://github.com/SpaSmALX/SpaSmALX.github.io"
                >
                <IoLogoGithub />
                  Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
