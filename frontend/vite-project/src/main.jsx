import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ChakraProvider  } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
   <ChakraProvider>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
