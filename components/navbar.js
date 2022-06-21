
import ThemeToggleButton from './theme-toggle-button'


const Navbar = props => {
    const {path} = props

    return (
        <Box
          position="fixed"
          as="nav"
          w="100%"
          bg={useColorModeValue('#ffffff40', '#20202380')}
          css={{ backdropFilter: 'blur(10px)' }}
          zIndex={2}
          {...props}
        >
        </Box>
    )
}

export default Navbar
