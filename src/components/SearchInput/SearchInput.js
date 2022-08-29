import axios from 'axios'
import { useState, useEffect } from 'react'
import { FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Button, Spinner, Box, Alert, AlertIcon, Badge } from '@chakra-ui/react'
import Card from '../Card/Card.js'
import InitialData from '../Data/InitialData.js'
import Synopsis from '../Modal/Synopsis.js'
import { animateVisualElement } from 'framer-motion'




function SeachInput() {
  const [input, setInput] = useState('')
  const [data, updateData] = useState(InitialData);
  const [searching, setSearching] = useState(false)
  const isError = input === ''
  const [noResult, setNoResult] = useState(false)
  const handleInputChange = (e) => setInput(e.target.value)
  const [word, setWord] = useState('')





  const handleClick = async () => {
    setSearching(true)


    const res = await axios.get(` https://api.jikan.moe/v4/anime?q=${input}&sfw`)

      .then(res => {
        updateData(res.data.data)
        
        setSearching(false)
        setWord(input)
      }).catch(err => {
       
      });
  }



  
  const filtered =   data.filter(objet => {
    return !(objet.rank != '0' && objet.synopsis != null && objet.type !== "Music" && objet.trailer.embed_url !== null) ;
  });
  
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
            {searching ? <Spinner ml="1em" position="absolute" mt=".5em" /> : null}
          </Box>
          {!isError ? (
            <FormHelperText>
              Enter the Anime you'd like to retrieve informations.
            </FormHelperText>
          ) : (
            <FormErrorMessage>An anime name is required.</FormErrorMessage>
          )}

        </Box>



        <Button colorScheme='blue' onClick={handleClick} w="200px" mt="1em" >retreive Infos</Button>
      </FormControl>


      {data.length == filtered.length  ? <Alert status='error' w="50%" borderRadius='lg' margin="auto" mt="2em" minW="300px">
        <AlertIcon />
        There was no result found for {word}, try another name
      </Alert> : null}

      <Box display="flex" flexWrap='wrap' alignItems='bottom' justifyContent='center'>
        {data.map((anime, idx) => {
          anime.idx = idx
          console.log(anime)
          if (anime.rank != '0' && anime.synopsis != null && anime.type !== "Music" && anime.trailer.embed_url !== null) {

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
              episodes={anime.episodes}
              duration={anime.duration}
              trailerurl={anime.trailer.embed_url}
              themesInsideArrays={anime.genres}
              theThemes={anime.genres.name}
              myFunction={anime.genres.map((genre, id) => {
                genre.id = id
                return <Box ml='1em' key={id} > <a href={genre.url} target="_blank" key={id} ><Badge   fontSize={[ '15px','15px' ,'17px','22px','25px' ]} colorScheme='red' >{genre.name}</Badge> </a> </Box>
              })}
            />
          }
          else return null

        })}


      </Box>

    </>
  )
}

export default SeachInput