import { Container,Flex,Text,HStack,Button,Input ,Box} from '@chakra-ui/react'
import React from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { useColorMode,useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FaSearch } from "react-icons/fa";
import { useProductStore } from '../store/product';
import { useState } from 'react';
import { IoIosRefreshCircle } from "react-icons/io";
import { MdRotate90DegreesCcw } from 'react-icons/md';
const navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const {products,setProducts}=useProductStore()

  
  const [search, setSearch] = useState("")
  let [name,setName]=useState("")



function sh(e){
  e.preventDefault()
  setSearch(e.target.value)
  let state
  if(products.length>10)
    { state=products.map((product)=>(product))
      
    }

 
  document.getElementById("t").style.display="block"
  if(e.target.value=="")
  {  
    document.getElementById("t").style.display="none"
  }
  
}

function ad(e){
  e.preventDefault()
  
    
  setSearch("")

    


  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  setProducts(filteredProducts);

  
}

  

  function ch(){
  

    document.getElementById("i").focus();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
   
    
    setProducts(filteredProducts);

    
  }
 
 function h(e) {
  e.preventDefault()
  setSearch("")
  const filteredProducts = products.filter((product) =>
   
    product.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
 
  
  setProducts(filteredProducts);
 }
   
    
  function q(){
    window.location.reload(true);
  }
   
    
  
  return (
    <Container top={"0"} zIndex={10} ml={"10%"}  position={"fixed"} h={"70px"}  maxW={"1000px"}  bg={useColorModeValue("gray.100", "gray.900")} borderRadius={"100px"}>
        <Flex
       
       h={16}
       alignItems={"center"}
      margin={"0"}
       flexDir={
        {base: "column",
         sm: "row",
         
        }
       
       }
      
       
       >
        <Text
        fontSize={{base: "22", sm: "28"}}
       textTransform={"uppercase"}
textAlign={"center"}
  bgGradient='linear(to-l,rgb(14, 46, 82), #FF0080)'
  bgClip='text'
  fontWeight='extrabold'
>
 <Link to={"/"}>Product Store 🛒</Link>

</Text>
<Box    ml={"10px"}   >
    <Button onClick={q}  bg={"none"}>
   
     < IoIosRefreshCircle  />
    </Button>
</Box>
     <form onSubmit={(e)=>ad(e)} action="">
     <Input margin={"0"} onChange={(e)=>sh(e)}  value={search}  ml={"5px"} autoFocus w={"400px"} placeholder='search somthing...'></Input>
     
     <Button onClick={ch} bg={"none"} > <FaSearch /></Button>
     </form>
  <HStack spacing={2} ml={"50px"} alignItems={"center"} >
  
  <Link to={"/create"}>
  <Button   ml={"10px"}   >  
   <CiSquarePlus fontSize={20}/>
  </Button>
  
  </Link>
  <Button onClick={toggleColorMode}>
    {colorMode === "light" ? (
      <MoonIcon />
    ) : (
      <SunIcon />
    )}
  </Button>
  </HStack>
        </Flex>
        <HStack   id='t' display={"none"}>

   
   { 
   
   products.map((product) => {
    try {
       if (product.name.toLowerCase().includes(search.toLowerCase())) {  
           return (
             <Button 
               value={name = product.name} 
               onClick={(e) => h(e)} 
               _hover={{ bg: "blue.700" }} 
               borderRadius={"0"}  
               w={"400px"} 
               bg={"blue.900"}
               key={product._id}    
               ml={"32%"}
             >
               Did you mean {product.name}?
             </Button>
           );
       } else {
         return null;
       }
     } catch (error) {
       console.log(error);
       return null;
     }
  })}
        </HStack>
     
    </Container>
  )
}

export default navbar
