import React from 'react'
import {Button} from '@chakra-ui/react'

function SignIn(props) {
  return (
    <div>

<Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500'
  onClick={props.signInWithGoogle}
>
  Sign In
</Button>
    </div>
  )
}

export default SignIn