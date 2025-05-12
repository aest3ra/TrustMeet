import { useState } from 'react'
import { Box, Heading, Text, Button, Image, VStack, Alert, AlertIcon } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'

const Login = () => {
  const [walletConnected, setWalletConnected] = useState(false)
  const [humanityVerified, setHumanityVerified] = useState(false)
  const navigate = useNavigate()

  // MetaMask wallet connect DEMO
  const handleConnectWallet = () => {
    setWalletConnected(true)
  }

  // Humanity Protocol verification DEMO
  const handleVerifyHumanity = () => {
    setHumanityVerified(true)
    setTimeout(() => {
      navigate('/networking')
    }, 1200)
  }

  return (
    <div className={styles.loginContainer}>
      <Image src="https://files.staging.peachworlds.com/website/b24aa721-af19-49d1-b937-6f85fecafe18/spinner-humanity.svg" alt="Humanity Protocol" h="60px" mb={6} />
      <Heading as="h2" size="lg" textAlign="center" color="brand.primary" mb={2}>
        Humanity Protocol Verification
      </Heading>
      <Text fontSize="xl" color="brand.secondary" mb={8} textAlign="center" maxW="400px" mx="auto">
        For secure Web3 networking, connect your wallet and complete palm verification.
      </Text>
      <VStack spacing={4} w="100%">
        <Button
          colorScheme="brand"
          onClick={handleConnectWallet}
          isDisabled={walletConnected}
          w="100%"
        >
          {walletConnected ? 'Wallet Connected' : 'Connect MetaMask Wallet'}
        </Button>
        <Button
          colorScheme="brand"
          variant="outline"
          onClick={handleVerifyHumanity}
          isDisabled={!walletConnected || humanityVerified}
          w="100%"
        >
          {humanityVerified ? 'Verification Complete!' : 'Palm Verification (Humanity Protocol)'}
        </Button>
      </VStack>
      <Box mt={8} textAlign="left" w="100%">
        <Text fontWeight="bold" mb={2}>Verification Steps</Text>
        <Text fontSize="sm" color="brand.secondary">1. Connect your MetaMask wallet.</Text>
        <Text fontSize="sm" color="brand.secondary">2. Complete palm verification with Humanity Protocol.</Text>
        <Text fontSize="sm" color="brand.secondary">3. Once verified, you can use the networking features.</Text>
      </Box>
      {humanityVerified && (
        <Alert status="success" mt={6} borderRadius="md">
          <AlertIcon />
          Verification complete! Redirecting to networking page...
        </Alert>
      )}
    </div>
  )
}

export default Login 