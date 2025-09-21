 
 import React from 'react'
 import { Box, Container ,Heading,Input,Button,useColorModeValue,useToast} from '@chakra-ui/react'
import { useProductStore } from '../store/product.jsx'
 const createpage = () => {
  const [product, setProduct] = React.useState({
    name: "",
    price: "",
    image: ""
  });
  function ch(e)
  {
    e.preventDefault()
   
  }
  const {createproduct} = useProductStore()
   const toast= useToast()
  const hand=async()=>
  {   

    const {success,message}= await createproduct(product)

    if(!success)
    {
     
      toast({
        title: message,
        status: "error",
        duration: 5000,
        isClosable: true,
      })
    }
   else{
      toast({
        title: message,
        status: "success",
        duration: 5000,
        isClosable: true,
      }
    )
  
    }
    setProduct({name:"",price:"",image:""});


   }
    
  
   return (

    
     <div>
       <Container  height={"200px"} mt={"13%"} >
        <Box bg={useColorModeValue("gray.100", "gray.900")} height={"250px"} w={"500px"} borderRadius={"100px"}>
      
       <center> <Heading w={"500px"} mr={"200px"}  bg={useColorModeValue("white", "gray.800")}>Create New Product</Heading></center>
        <Box> 
         
          <form onChange={(e)=>ch(e)}>
        <Input borderRadius={"100px"} name='name' value={product.name} onChange={(e)=>setProduct({...product,name:e.target.value})} mt={"10px"} ml={"30px"} w={"90%"} placeholder='Product name'></Input>
        <Input borderRadius={"100px"} name='price' type='number' value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})} mt={"10px"} ml={"30px"} w={"90%"} placeholder='Price'></Input>
        <Input borderRadius={"100px"}  name='image' value={product.image} onChange={(e)=>setProduct({...product,image:e.target.value})} mt={"10px"} ml={"30px"} w={"90%"} placeholder="Image Url"></Input>
        
       
        <Button mt={"10px"} ml={"100px"} w={"60%"}  onClick={hand}> Add Product</Button>
        </form>
  
        </Box>
       </Box>
     
       
       </Container>
     </div>
   )
 }
 
 export default createpage
 