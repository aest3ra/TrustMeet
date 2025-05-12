import { Heading, Text, Button, Image, Stack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import Card from '../../components/Card'
import styles from './Home.module.css'

const features = [
  {
    title: 'Powerful Identity Verification',
    desc: 'Securely verify your identity with Humanity Protocol\u2019s palm vein authentication and Web3 wallet integration.',
  },
  {
    title: 'Knowledge Sharing Rewards',
    desc: 'Earn crypto rewards and reputation through counseling and networking activities.',
  },
  {
    title: 'Networking Based on Real Influence',
    desc: 'Connect with trusted experts based on verified followers and reputation.',
  },
]

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.leftSection}>
        <Image src="/trustmeet.png" alt="Humanity Protocol" h="60px" mb={6} />
        <Heading as="h1" size="2xl" color="brand.primary" mb={4} textAlign="center">
          Web3-based Trusted Networking Platform
        </Heading>
        <Text fontSize="xl" color="brand.secondary" mb={8} textAlign="center">
          Experience safer and more valuable career networking<br />
          with Humanity Protocols biometric authentication and blockchain rewards.
        </Text>
        <Button as={RouterLink} to="/login" size="lg" colorScheme="brand" mb={4}>
          Get Started Now
        </Button>
      </div>
      <div className={styles.rightSection}>
        <Stack spacing={6} align="center" w="100%">
          {features.map((f, i) => (
            <Card key={i} maxW="400px" w="100%">
              <Heading as="h3" size="md" color="brand.accent" mb={2} textAlign="center">{f.title}</Heading>
              <Text color="brand.secondary" textAlign="center">{f.desc}</Text>
            </Card>
          ))}
        </Stack>
      </div>
    </div>
  )
}

export default Home 