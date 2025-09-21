import React, { useEffect } from 'react'
import { Container,Image,Text, Button,HStack, useToast} from '@chakra-ui/react'
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useProductStore } from '../store/product';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const cart = ({product}) => {
  

  const {state} = useLocation()
  const navigate=useNavigate()
    const {deleteproducts} = useProductStore();
    useEffect(() => {
      deleteproducts();
    
     
    },[deleteproducts])
     const toast=useToast()
  
     
  const ch=async(pid)=> {
 
   const {success,message}=await deleteproducts(pid)
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
      })
     
  }
  
}
 
  
 function sh(product) {

  
   navigate("/update", {
     state: { product },
   });
 }
 
  return (  
    
 <Container
   p={"4"}
   objectFit={"cover"}
  mt={"20px"}
    
  >
    
  <Image    _hover={{opacity: "0.5", w:"190px",h:"210px%"}} w={"200px"}  h={"200px"} src={product.image} >
 
  </Image> 

  <HStack>



  <Text   display={"flex"}  textColor={"black"} bg={"white"}>  <i>{product.name}</i>  - 💲{product.price} 
     </Text> 


<HStack bg={"red"} objectFit={"cover"} _hover={{bg:"red.500"}}>

<Button onClick={()=>ch(product._id)}> 

<MdDeleteForever />
</Button>
</HStack>
<HStack objectFit={"cover"} >
  <Button  onClick={()=>sh(product)} >

<FaEdit />
  </Button>
</HStack>

  </HStack>
 

  
   
  
    


 
 </Container>

  )
}

export default cart
