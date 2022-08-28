import React from 'react'
import { Button } from '@chakra-ui/react'

function SignOut(props) {
    return (
        <div>
            <Button onClick={props.wantSignOut}
                size='md'
                height='48px'
                width='200px'
                border='2px'
                borderColor='red.500'
                mt='1em'
            >
                Sign Out
            </Button>
        </div>
    )
}

export default SignOut