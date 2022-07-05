
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
// import ThemeToggleButton from './theme-toggle-button'


const Navbar = props => {
  const { path } = props
  return (
    <Box 
      bg={useColorModeValue("#fffff")}
      w='100%'
      p={5}
      borderColor='tomato'
      borderRadius='lg'
      borderWidth='2px'
      color='black'
      {...props}
      >
    </Box>
    )
}
export default Navbar
