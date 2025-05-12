import { useState } from 'react'
import { Box, Heading, Input, Select, SimpleGrid, Text, Avatar, Button, Stack, useDisclosure } from '@chakra-ui/react'
import Card from '../../components/Card'
import Modal from '../../components/Modal'

const expertsDummy = [
  { id: 1, name: 'Alice Johnson', field: 'Blockchain', rating: 4.9, followers: 210, bio: 'Blockchain consultant, 7 years experience' },
  { id: 2, name: 'Bob Smith', field: 'AI', rating: 4.7, followers: 180, bio: 'AI researcher, 5 years experience' },
  { id: 3, name: 'Carol Lee', field: 'Marketing', rating: 4.8, followers: 150, bio: 'Web3 marketing expert' },
  { id: 4, name: 'David Kim', field: 'Blockchain', rating: 4.6, followers: 120, bio: 'Smart contract developer, DeFi specialist' },
  { id: 5, name: 'Emma Williams', field: 'AI', rating: 4.9, followers: 300, bio: 'Machine learning engineer, AI ethics advocate' },
  { id: 6, name: 'Frank Miller', field: 'Marketing', rating: 4.5, followers: 95, bio: 'Growth hacker, digital marketing strategist' },
  { id: 7, name: 'Grace Chen', field: 'Blockchain', rating: 4.8, followers: 175, bio: 'NFT project advisor, blockchain educator' },
  { id: 8, name: 'Henry Park', field: 'AI', rating: 4.7, followers: 160, bio: 'AI product manager, data scientist' },
] 

const fields = ['All', 'Blockchain', 'AI', 'Marketing']

const Networking = () => {
  const [search, setSearch] = useState('')
  const [field, setField] = useState('All')
  const [selected, setSelected] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const filtered = expertsDummy.filter(e =>
    (field === 'All' || e.field === field) &&
    (e.name.toLowerCase().includes(search.toLowerCase()) || e.bio.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <Box>
      <br /><br />
      <Heading as="h2" size="lg" mb={8}>Expert Networking</Heading>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mb={8}>
        <Input
          placeholder="Search by name or bio"
          value={search}
          onChange={e => setSearch(e.target.value)}
          maxW="300px"
        />
        <Select value={field} onChange={e => setField(e.target.value)} maxW="200px">
          {fields.map(f => <option key={f}>{f}</option>)}
        </Select>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {filtered.map(expert => (
          <Card key={expert.id}>
            <Stack direction="row" align="center" spacing={4}>
              <Avatar name={expert.name} />
              <Box flex={1}>
                <Text fontWeight="bold" fontSize="xl">{expert.name}</Text>
                <Text color="brand.secondary" fontSize="sm">{expert.field} | Rating {expert.rating} | Followers {expert.followers}</Text>
                <Text fontSize="md" color="brand.secondary">{expert.bio}</Text>
              </Box>
              <Button colorScheme="brand" onClick={() => { setSelected(expert); onOpen(); }}>
                Request Networking
              </Button>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={selected ? `Request networking with "${selected.name}"` : ''}
        footer={
          <Button colorScheme="brand" onClick={onClose}>Request Sent</Button>
        }
      >
        <Text mb={2}>Send a networking request message to this expert.</Text>
        <Text fontWeight="bold">Field: {selected?.field}</Text>
        <Text fontWeight="bold">Bio: {selected?.bio}</Text>
      </Modal>
    </Box>
  )
}

export default Networking 