import { useState, useRef, useEffect } from 'react'
import { Box, Flex, Avatar, Heading, Text, Badge, Input, Button, Stack } from '@chakra-ui/react'
import Card from '../../components/Card'
import styles from './Chat.module.css'

const dummyUser = {
  name: 'Alice Johnson',
  field: 'Blockchain',
  bio: 'Blockchain consultant',
}

const dummyMessages = [
  { id: 1, from: 'me', text: 'Hello! I would like to request a consultation.' },
  { id: 2, from: 'other', text: 'Sure, let me know what would you like to discuss' },
  { id: 3, from: 'me', text: 'So, I want to participate in a project called "humanity protocol", any advice you can give me?' },
]

const Chat = () => {
  const [messages, setMessages] = useState(dummyMessages)
  const [input, setInput] = useState('')
  const [timer, setTimer] = useState(0)
  const [ended, setEnded] = useState(false)
  const intervalRef = useRef()

  useEffect(() => {
    if (!ended) {
      intervalRef.current = setInterval(() => setTimer(t => t + 1), 1000)
    } else {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [ended])

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { id: Date.now(), from: 'me', text: input }])
    setInput('')
  }

  const handleEnd = () => {
    setEnded(true)
  }

  const formatTime = sec => `${Math.floor(sec / 60)}:${('0' + (sec % 60)).slice(-2)}`

  return (
    <div className={styles.chatContainer}>
      <Card mb={4}>
        <Flex align="center" gap={4} position="relative">
          <Avatar name={dummyUser.name} />
          <Box>
            <Heading as="h3" size="md">{dummyUser.name}</Heading>
            <Badge colorScheme="green" mr={2}>Verified</Badge>
            <Text fontSize="sm" color="brand.secondary">{dummyUser.field}</Text>
          </Box>
          <Box ml="auto" display="flex" flexDirection="column" alignItems="flex-end" gap={2}>
            <Text fontWeight="bold">Session Time: {formatTime(timer)}</Text>
            {!ended && (
              <Button colorScheme="red" variant="outline" size="sm" onClick={handleEnd}>End Session</Button>
            )}
          </Box>
        </Flex>
      </Card>
      <Box bg="gray.50" borderRadius="md" p={4} minH="300px" mb={4} w="100%">
        <Stack spacing={3}>
          {messages.map(msg => (
            <Flex key={msg.id} justify={msg.from === 'me' ? 'flex-end' : 'flex-start'}>
              <Box
                bg={msg.from === 'me' ? 'brand.accent' : 'white'}
                color={msg.from === 'me' ? 'white' : 'brand.primary'}
                px={4} py={2} borderRadius="xl"
                maxW="70%"
              >
                {msg.text}
              </Box>
            </Flex>
          ))}
          {/* typing indicator */}
          <Flex justify="flex-start">
            <Box className={styles.typing} bg="white" color="brand.primary" px={4} py={2} borderRadius="xl" maxW="70%">
              <span className={styles.dot}>.</span>
              <span className={styles.dot}>.</span>
              <span className={styles.dot}>.</span>
            </Box>
          </Flex>
        </Stack>
      </Box>
      {!ended ? (
        <Flex gap={2} w="100%">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend()}
          />
          <Button colorScheme="brand" onClick={handleSend}>Send</Button>
        </Flex>
      ) : (
        <Card mt={4} bg="green.50">
          <Text fontWeight="bold" color="brand.accent">Session ended. <br />Reward has been automatically sent!</Text>
        </Card>
      )}
    </div>
  )
}

export default Chat 