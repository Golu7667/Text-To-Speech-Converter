import { Box ,Button,Center,Input,Text, VStack} from '@chakra-ui/react'
import { useState } from 'react';

function App() {
   const [text,setText]=useState('')
   const [loading,setLoading]=useState(false)
 const handleSubmit=()=>{
  setLoading(true)

  if ('speechSynthesis' in window) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  } else {
    alert('Text-to-speech is not supported in your browser.');
  }
  setLoading(false)


 }

  return (
    <Box w="100vw" h="100vh">
     <Center  h="100vh" >
      <VStack>
      <Text fontSize='xl' color='blue.400' mb='10px' fontFamily={"Arvo"}>Enter Text To Speech Converter App</Text>
      <Box h="100px" w="400px" boxShadow='dark-lg' rounded={'xl'} p={"5px"}>
      <Input placeholder='Enter Text' value={text} onChange={(e)=>setText(e.target.value)}/>
      <Box w="100%" >
        <Center h="50px">
      <Button colorScheme='blue' isLoading={loading} onClick={()=>handleSubmit()}>Click Here</Button>
      </Center>
      </Box>
    
      </Box>
      </VStack>
       </Center>
    </Box>
  );
}

export default App;
