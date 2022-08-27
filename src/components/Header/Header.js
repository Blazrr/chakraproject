import React from 'react'
import {Text, Box} from '@chakra-ui/react'

function Header() {
  return (
    <Box w='100%'
    
    bgGradient={
    
      'linear(to-t, blue.200, teal.500)'
     
    }  p="1em">
        <Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='5xl'
  fontWeight='extrabold'
  textAlign="center"
  
>
  AnimeLooker
</Text>
    </Box>
  )
}

export default Header