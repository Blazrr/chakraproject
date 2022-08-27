import axios from 'axios'
import { useState, useEffect } from 'react'
import { FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Button, Spinner, Box, Alert, AlertIcon } from '@chakra-ui/react'
import Card from '../Card/Card.js'
import InitialData from '../Data/InitialData.js'
import Synopsis from '../Modal/Synopsis.js'




function SeachInput() {
  const [input, setInput] = useState('')
  const [data, updateData] = useState(InitialData);
  const [searching, setSearching] = useState(false)
  const isError = input === ''
  const handleInputChange = (e) => setInput(e.target.value)
  const [word, setWord] = useState('')





  const handleClick = async () => {
    setSearching(true)


    const res = await axios.get(` https://api.jikan.moe/v4/anime?q=${input}&sfw`)

      .then(res => {
        updateData(res.data.data)
        console.log(data)
        setSearching(false)
        setWord(input)
      


      }).catch(err => {
        console.log(err)
        console.log("no data found");
      });


  }



  return (

    <>
      <FormControl isInvalid={isError} className="form-control" w="80%" ml='auto' mr="auto" display='flex' flexDirection="column" alignItems="center" justifyContent="center" mt="2em">
        <Box >
          <FormLabel>Anime Name</FormLabel>
      <Box>
          <Input
            type='email'
            value={input}
            onChange={handleInputChange}
            width="300px"
            position="relative"
           



          />
          {searching ? <Spinner ml="1em"  position="absolute" mt=".5em"/> : null }
          </Box>
          {!isError ? (
            <FormHelperText>
              Enter the Anime you'd like to retreive informations.
            </FormHelperText>
          ) : (
            <FormErrorMessage>An anime name is required.</FormErrorMessage>
          )}

        </Box>


        
        <Button colorScheme='blue' onClick={handleClick} w="200px" mt="1em" >retreive Infos</Button>
      </FormControl>


      {data.length ==0 ? <Alert status='error' w="50%" borderRadius='lg' margin="auto" mt="2em" minW="300px">
        <AlertIcon />
        There was no result found for {word}
      </Alert> : null}

      <Box display="flex" flexWrap='wrap' alignItems='center' justifyContent='center'>
        {data.map((anime, idx) => {
          anime.idx = idx
          if (anime.rank != '0' && anime.synopsis != null && anime.type !== "Music")
            return <Card
              key={idx}
              title={anime.title}
              image={anime.images.jpg.large_image_url}
              alt={anime.images.webp}
              title_japanese={anime.title_japanese}
              popularity={anime.popularity}
              score={anime.score}
              members={anime.members}
              type={anime.type}
              synopsis={anime.synopsis}
              url={anime.url}
            />
          else return null

        })}


      </Box>

    </>
  )
}

export default SeachInput