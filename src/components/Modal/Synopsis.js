import React from 'react'
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from '@chakra-ui/react'

function Synopsis(props) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>{props.synopsis}</p>
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