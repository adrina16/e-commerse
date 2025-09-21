import {Box} from "@chakra-ui/react"
import { Routes,Route } from "react-router-dom"
import Homepage from "./pages/Homepage.jsx"
import Createpage from "./pages/createpage.jsx"
import Navbar from "./components/navbar.jsx"
import Update from "./cart/update.jsx"

function App() {
  return (
   <Box minH={"100h"}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/create" element={<Createpage/>}></Route>
      <Route path="/update" element={<Update/>}></Route>
      <Route path="*" element={<h1>Page not found</h1>}></Route>
    </Routes>
   </Box>
  )
}

export default App
