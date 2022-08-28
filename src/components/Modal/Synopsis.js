import React from 'react'
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Text, AspectRatio, Box } from '@chakra-ui/react'

function Synopsis(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay />
                <ModalContent>
                    
                    <ModalHeader  display='flex'>
                        <Text w='max-content'fontSize={[ '30px','35px' ,'50px','70px','80px' ]}  >{props.title}</Text>
                    <Box alignItems='center' display='flex' flexDir='row' flexWrap='wrap' ml='2em' f>
                    {props.myFunction}
                    </Box>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Text fontSize='2xl' bgColor='orange.300' borderRadius='lg' p='1em' w='max-content'>{props.episodes} episodes of {props.duration}</Text>
                        <Text mt="1em" fontSize={[ '17px','17px' ,'17px','22px','30px' ]}>{props.synopsis}</Text>
                        <Box w='800px' maxW='80%' h='400px' mt='2em'>
                        <iframe width="100%" height="100%"  src={props.trailerurl} title="YouTube video player" frameBorder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </Box>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <a href={props.url} target="_blank" >  <Button colorScheme='green'> MyAnimeList</Button></a>
                    </ModalFooter>
                </ModalContent>
            </Modal >
        </div>
    )
}

export default Synopsis