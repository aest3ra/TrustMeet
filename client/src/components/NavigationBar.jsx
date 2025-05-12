import { Box, Flex, Button, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const NavigationBar = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      zIndex="sticky"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={4}
        h="16"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <RouterLink to="/">
            <Image
              src="/logo.png"
              alt="Humanity Protocol"
              h="8"
              mr={4}
            />
          </RouterLink>
          <Text
            fontSize="xl"
            fontWeight="bold"
            color="brand.primary"
          >
            TrustMeet
          </Text>
        </Flex>

        <Flex gap={4}>
          <Button
            as={RouterLink}
            to="/networking"
            variant="ghost"
            colorScheme="brand"
          >
            Networking
          </Button>
          <Button
            as={RouterLink}
            to="/swap"
            variant="ghost"
            colorScheme="brand"
          >
            Swap
          </Button>
          <Button
            as={RouterLink}
            to="/profile"
            variant="ghost"
            colorScheme="brand"
          >
            Profile
          </Button>
          <Button
            as={RouterLink}
            to="/login"
            colorScheme="brand"
          >
            Connect
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default NavigationBar 