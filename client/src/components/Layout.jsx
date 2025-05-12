import { Box } from '@chakra-ui/react'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <NavigationBar />
      <Box
        as="main"
        pt="16" // NavigationBar의 높이만큼 패딩
        px={4}
        maxW="1200px"
        mx="auto"
        flex="1"
        w="100%"
      >
        {children}
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout 