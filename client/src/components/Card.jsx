import { Box, useColorModeValue } from '@chakra-ui/react'

const Card = ({ children, ...props }) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      p={6}
      shadow="sm"
      _hover={{ shadow: 'md' }}
      transition="all 0.2s"
      {...props}
    >
      {children}
    </Box>
  )
}

export default Card 