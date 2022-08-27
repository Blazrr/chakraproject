import React from 'react'
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Text } from '@chakra-ui/react'

function Synopsis(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <Text fontSize='2xl'>{props.episodes} episodes of {props.duration}</Text>
                        <Text mt="1em">{props.synopsis}</Text>

                        <iframe width="560" height="315" src={props.trailerurl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <a href={props.url} target="_blank" >  <Button variant='ghost'> MyAnimeList</Button></a>
                    </ModalFooter>
                </ModalContent>
            </Modal >
        </div>
    )
}

export default Synopsis