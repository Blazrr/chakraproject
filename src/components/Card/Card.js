import React from 'react'
import { Box, Image, Badge, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react'

function Card(props) {

  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>



      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' width='300px' ml="1em" mr='1em' position='relative'>
        <Image src={props.image} alt={props.alt} width='100%' />

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

    
        <Button onClick={onOpen} position='absolute' bottom='0' right='0'>Synopsis</Button>
      <Modal isOpen={isOpen} onClose={onClose}  size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{props.synopsis}</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>




      </Box>



      



    </>
  )
}

export default Card