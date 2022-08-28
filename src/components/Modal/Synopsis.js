import React from 'react'
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Text, AspectRatio, Box } from '@chakra-ui/react'

function Synopsis(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            <Button borderRadius='none' borderTopRightRadius='lg' position="absolute" bottom="0" left="0" onClick={onOpen}>More info</Button>
            <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay />
                <ModalContent>
                    
                    <ModalHeader  display='flex'>
                        <Text w='max-content'fontSize={[ '30px','35px' ,'50px','70px','80px' ]} color='purple.400' >{props.title}</Text>
                    <Box alignItems='center' display='flex' flexDir='row' flexWrap='wrap' ml='2em'  height='130px' mt='auto' mb='auto'>
                    {props.myFunction}
                    </Box>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Text fontSize={[ '15px','17px' ,'25px','30px','30px' ]} bgColor='orange.300' borderRadius='lg' p='1em' w='max-content'>{props.episodes} episodes of {props.duration}</Text>
                        <Text mt="1em" fontSize={[ '17px','17px' ,'17px','22px','30px' ]}>{props.synopsis}</Text>
                        <Box w='800px' maxW='80%' h='400px' m=' 2em auto 0 auto'>
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