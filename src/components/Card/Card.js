import React from 'react'
import{Box, Image, Badge} from '@chakra-ui/react'

function Card(props) {

  return (
    <>
  


    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' width='300px' ml="1em" mr='1em'>
      <Image src={props.image} alt={props.alt} width='100%'/>

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            {props.type}
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {props.title_japanese} 
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {props.title}
        </Box>

        <Box>
          {props.popularity}
          <Box as='span' color='gray.600' fontSize='sm' ml=".5em">
            Popularity
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {props.score} stars
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {props.members} reviews
          </Box>
        </Box>
      </Box>
    </Box>


    </>
  )
}

export default Card