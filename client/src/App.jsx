import React from 'react'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from './styles/theme'
import Layout from './components/Layout'

// Pages
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Networking from './pages/Networking/Networking'
import Profile from './pages/Profile/Profile'
import Chat from './pages/Chat/Chat'
import Swap from './pages/Swap/Swap'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/chat/:roomId" element={<Chat />} />
            <Route path="/swap" element={<Swap />} />
          </Routes>
        </Layout>
      </Router>
    </ChakraProvider>
  )
}

export default App
