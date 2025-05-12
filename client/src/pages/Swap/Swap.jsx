import { useState } from 'react'
import { Box, Heading, Text, Input, Button, Stack, Flex, Alert, AlertIcon, useToast } from '@chakra-ui/react'
import { FaExchangeAlt } from 'react-icons/fa'

const dummyBalance = 320.0
const dummyUSDT = 440.92
const btcPrice = 103973.77
const percentOptions = [10, 25, 50, 75, 100]

const Swap = () => {
  const [amount, setAmount] = useState('')
  const [percent, setPercent] = useState(null)
  const [success, setSuccess] = useState(false)
  const toast = useToast()

  const handlePercent = (p) => {
    setPercent(p)
    setAmount(((dummyBalance * p) / 100).toFixed(2))
  }

  const handleInput = (e) => {
    setAmount(e.target.value.replace(/[^0-9.]/g, ''))
    setPercent(null)
  }

  const handleSwap = () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) return
    setSuccess(true)
    toast({
      title: 'Swap completed! (DEMO)',
      status: 'success',
      duration: 1500,
      isClosable: true,
      position: 'top',
    })
    setTimeout(() => setSuccess(false), 1500)
    setAmount('')
    setPercent(null)
  }

  return (
    <Box minH="80vh" bg="brand.background" display="flex" flexDirection="column" alignItems="center" justifyContent="center" py={10}>
      <Box bg="white" borderRadius="2xl" boxShadow="md" maxW="400px" w="100%" p={8}>
        <Heading as="h2" size="lg" color="brand.primary" mb={6} textAlign="center">
          Swap
        </Heading>
        {/* You send */}
        <Text fontWeight="bold" color="brand.primary" mb={1}>
          You send
        </Text>
        <Flex align="center" gap={2} mb={2}>
          <Text fontWeight="bold" color="brand.accent" fontSize="xl">TM</Text>
          <Input
            value={amount}
            onChange={handleInput}
            placeholder="0"
            type="text"
            maxW="120px"
            textAlign="right"
            fontWeight="bold"
            fontSize="lg"
            borderRadius="md"
            bg="brand.background"
          />
        </Flex>
        <Flex gap={2} mb={2}>
          {percentOptions.map((p) => (
            <Button
              key={p}
              size="sm"
              variant={percent === p ? 'solid' : 'outline'}
              colorScheme="brand"
              borderRadius="md"
              onClick={() => handlePercent(p)}
            >
              {p}%
            </Button>
          ))}
        </Flex>
        <Text color="brand.secondary" fontSize="sm" mb={4}>
          Balance: {dummyBalance} TM
        </Text>
        <Flex justify="center" align="center" mb={4}>
          <Box bg="brand.background" borderRadius="full" p={2} boxShadow="sm">
            <FaExchangeAlt color="#48BB78" size={22} />
          </Box>
        </Flex>
        {/* You get */}
        <Text fontWeight="bold" color="brand.primary" mb={1}>
          You get
        </Text>
        <Flex align="center" gap={2} mb={2}>
          <Text fontWeight="bold" color="brand.accent" fontSize="xl">USDT</Text>
          <Input
            value={amount ? (Number(amount) * 1.38).toFixed(2) : ''}
            placeholder="0"
            type="text"
            maxW="120px"
            textAlign="right"
            fontWeight="bold"
            fontSize="lg"
            borderRadius="md"
            bg="brand.background"
            readOnly
          />
        </Flex>
        <Text color="brand.secondary" fontSize="sm" mb={4}>
          Balance: {dummyUSDT} USDT
        </Text>
        <Button
          colorScheme="brand"
          size="lg"
          borderRadius="lg"
          w="100%"
          mt={2}
          fontWeight="bold"
          fontSize="lg"
          onClick={handleSwap}
        >
          Swap
        </Button>
        <Alert status="warning" mt={6} borderRadius="md" fontSize="sm" colorScheme="yellow">
          <AlertIcon />
          To ensure the security and stability of our services, exchanges are possible once every 5 minutes.
        </Alert>
      </Box>
    </Box>
  )
}

export default Swap 