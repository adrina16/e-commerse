import React, { use } from 'react'
import { Link } from 'react-router-dom'
import { Heading,Text,Container,SimpleGrid} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useProductStore } from '../store/product.jsx'
import Cart from '../cart/cart.jsx'

const Homepage = () => {
  const {fetchproducts,products} = useProductStore();

  useEffect(() => {
    fetchproducts();
   
   
  },[fetchproducts])
   
  
 
  
  
 
  


  return (
    

     <Container  maxW={"100%"}>
    
      <Heading textAlign={"center"} ><Text
      mt={"20px"}
  bgGradient='linear(to-l,rgb(27, 14, 75),rgb(66, 133, 146))'
  bgClip='text'
  fontSize='4xl'
  fontWeight='extrabold'
>
 Current Product 🚀
</Text></Heading>

  


<SimpleGrid
  columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
 flex={1}
 spacing={5}
 
>
{
products.map((product) => {
 
 try {
  
  return  <Cart key={product._id} product={product}/>
 } catch (error) {
  console.log(error);
  return null
 }
 
})

}
</SimpleGrid>



<Text   textAlign={"center"}  mt={"90px"}  > product not Found 🥲 
  <Link    to={"/create"}> 
  <Text as={"span"} color="blue" _hover={{textDecoration:"underline"}}>Create a product
    </Text>   
    </Link>
    </Text>



</Container>

   

  )
}

export default Homepage
