import React from 'react'
import { Box, Image, Badge, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react'
import Synopsis from '../Modal/Synopsis'
function Card(props) {

 


  return (
    <>



      <Box  borderWidth='1px' borderRadius='lg' overflow='hidden'  ml="1em" mr='1em' position='relative' width="300px"  mt='2em'>
        <Image src={props.image} alt={props.alt} width='300px' />

        <Box p='6'>
          <Box display='flex' alignItems='baseline' >
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
        <Synopsis synopsis={props.synopsis} url={props.url} title={props.title} episodes={props.episodes} duration={props.duration} trailerurl={props.trailerurl}/>
      </Box>
      



      



    </>
  )
}

export default Card