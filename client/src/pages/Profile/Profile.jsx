import { Box, Flex, Avatar, Heading, Text, Badge, Stack, Divider, SimpleGrid, IconButton, useToast } from '@chakra-ui/react'
import { FiCopy } from 'react-icons/fi'
import Card from '../../components/Card'
import styles from './Profile.module.css'

const dummyProfile = {
  name: 'Aestera Pak',
  wallet: '0xB0....C3D2',
  kyc: 'Cyber Security Analyst / 4 years',
  reputation: 4.8,
  followers: 123,
  rewards: 320,
  history: [
    { id: 1, type: 'Consulting', target: 'Alice Johnson', date: '2024-06-01' },
    { id: 2, type: 'Networking', target: 'Bob Smith', date: '2024-05-28' },
  ],
  reviews: [
    { id: 1, from: 'Alice Johnson', rating: 5, comment: 'Very helpful and insightful session!' },
    { id: 2, from: 'Bob Smith', rating: 4.5, comment: 'Professional and friendly.' },
  ],
}

const Profile = () => {
  const toast = useToast()
  const handleCopy = () => {
    navigator.clipboard.writeText(dummyProfile.wallet)
    toast({
      title: 'Copied!',
      status: 'success',
      duration: 1200,
      isClosable: true,
      position: 'top',
    })
  }

  return (
    <div className={styles.profileContainer}>
      <Card mb={8}>
        <Flex align="center" gap={6}>
          <Avatar size="xl" name={dummyProfile.name} />
          <Box>
            <Heading as="h2" size="lg" mb={1}>{dummyProfile.name}</Heading>
            <Stack direction="row" gap={2} mb={2}>
              <Badge colorScheme="green">Humanity Verified</Badge>
              <Badge colorScheme="blue">KYC Verified</Badge>
            </Stack>
            <Text fontSize="sm" color="brand.secondary">{dummyProfile.kyc}</Text>
            <Flex align="center" gap={2}>
              <Text fontSize="sm" color="brand.secondary">Wallet: {dummyProfile.wallet}</Text>
              <IconButton
                aria-label="Copy wallet address"
                icon={<FiCopy />}
                size="xs"
                variant="ghost"
                colorScheme="brand"
                onClick={handleCopy}
              />
            </Flex>
            <Stack direction="row" mt={2} gap={4}>
              <Text fontWeight="bold">Reputation: {dummyProfile.reputation}</Text>
              <Text fontWeight="bold">Followers: {dummyProfile.followers}</Text>
              <Text fontWeight="bold">Total Rewards: {dummyProfile.rewards} TM</Text>
            </Stack>
          </Box>
        </Flex>
      </Card>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        <Card>
          <Heading as="h3" size="md" mb={3}>Networking History</Heading>
          {dummyProfile.history.map(h => (
            <Box key={h.id} mb={2}>
              <Text fontWeight="bold">{h.type} - {h.target}</Text>
              <Text fontSize="sm" color="brand.secondary">{h.date}</Text>
            </Box>
          ))}
        </Card>
        <Card>
          <Heading as="h3" size="md" mb={3}>Reviews & Ratings</Heading>
          {dummyProfile.reviews.map(r => (
            <Box key={r.id} mb={2}>
              <Text fontWeight="bold">{r.from} <Badge colorScheme="yellow">★ {r.rating}</Badge></Text>
              <Text fontSize="sm" color="brand.secondary">{r.comment}</Text>
            </Box>
          ))}
        </Card>
      </SimpleGrid>
      <Divider my={8} />

    </div>
  )
}

export default Profile 