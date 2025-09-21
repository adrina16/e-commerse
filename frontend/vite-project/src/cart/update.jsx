import { Box ,Input,Heading,Image,Text,HStack} from '@chakra-ui/react'

import { Button,Container} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useProductStore } from '../store/product'
import {useToast} from '@chakra-ui/react'
import { useEffect } from 'react'
const update = () => {
  const toast=useToast()
  const {state}=useLocation()
  const {updateproduct}=useProductStore()

  let [product, setProduct] = useState({
    name: state.product.name,
    price: state.product.price,
    image: state.product.image
  })
 
  let [name, setName] = useState(state.product.name)
  let [price, setPrice] = useState(state.product.price)
  let [image, setImage] = useState(state.product.image)
   
  function ch(e) {
    e.preventDefault()
   
   
      setName(name=e.target.value)
   
   
    
  }

  function bh(e) {
    e.preventDefault()
   
   
      setPrice(price=e.target.value)
   
   
    
  } 
  function lh(e) {
    e.preventDefault()
   
   
      setImage(image=e.target.value)
   
   
    
  }
  
   useEffect(() => {
       updateproduct();
      
       
      },[updateproduct])
  const sh=async()=> {
    product.name=name
    product.price=price
    product.image=image
     const {message,success}=await updateproduct(name,price,image,state.product._id)
    
      if(!success)
      { console.log(message);
      
        toast(
          {
            title: message,
         status: "error",
          duration: 5000,
           isClosable: true,
          })}
          else
          { 
            toast(
              {
                
              title: message,
              status: "success",
              duration: 5000,
              isClosable: true,
    })
  }
    
  }
  return (
    <Container mt={"50px"}  display={"flex"} maxW={"100%"} h={"100vh"} p={"0"}>

    <Box  boxShadow={"1px 1px 20px 3px rgb(61, 9, 85)"}  mt={"5%"} ml={"20%"}  bg={"blue.100"}  height={"50vh"} width={"20vw"}>
       <Heading    color={"purple.900"}  textAlign={"center"}>Input</Heading>
        <Box p={1} >

       <Input type='name' onChange={(e)=>ch(e)} boxShadow={"1px 1px 1px 2px rgb(61, 9, 85)"} value={name}  mt={"10px"} color={"purple.900"}     ></Input>
     <Input type='number' onChange={(e)=>bh(e)} boxShadow={"1px 1px 1px 2px rgb(61, 9, 85)"} value={price} color={"purple.900"} ></Input>
      <Input type='url' onChange={(e)=>lh(e)}  boxShadow={"1px 1px 1px 2px rgb(61, 9, 85)"} value={image} color={"purple.900"} ></Input>
        </Box>
          
        <Button onClick={sh} _hover={{color:"purple.900" ,bg:"blue.100"}} borderRadius={"0"} w={"100%"} mt={"20%"} bg={"purple.900"}> Done</Button>
    </Box>
     <Box>
      <Image mt={"20%"} ml={"70%"} h={"250px"}  w={"170px"} src={product.image}></Image>
      <HStack    ml={"75%"} >

      <Heading  textAlign={"center"}>

        <Text  textAlign={"center"} bg={"white"}  objectFit={"cover"} color={"black"} >{product.name}- 💲{product.price}</Text>
      
        </Heading> 
      </HStack>

     </Box>
    </Container>
  )
}

export default update
