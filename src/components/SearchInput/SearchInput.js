import axios from 'axios'
import { useState,useEffect } from 'react'
import { FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Button } from '@chakra-ui/react'
import Card from '../Card/Card.js'
import './SearchInput.scss'
import InitialData from '../Data/InitialData.js'




function SeachInput() {
  const [input, setInput] = useState('')
  

  const [data, updateData] = useState(InitialData);
  

  const handleInputChange = (e) => setInput(e.target.value)

  const handleClick = async () => {
    const res = await axios.get(` https://api.jikan.moe/v4/anime?q=${input}&sfw`)
    updateData(res.data.data)
    console.log(data)
  }

  const isError = input === ''

  return (
    
        <>
      <FormControl isInvalid={isError} className="form-control">
      <div>
        <FormLabel>Anime Name</FormLabel>
        <Input
          type='email'
          value={input}
          onChange={handleInputChange}
          width="300px"
        />
        {!isError ? (
          <FormHelperText>
            Enter the Anime you'd like to retreive informations.
          </FormHelperText>
        ) : (
          <FormErrorMessage>An anime name is required.</FormErrorMessage>
        )}
        </div>
        <Button colorScheme='blue' onClick={handleClick} ml="2em" >Button</Button>
      </FormControl>
          <div className='all-cards'>
      {data.map((anime, idx) => {
        anime.idx = idx
        console.log(anime)
         if(anime.rank != '0' && anime.synopsis != null)
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
      />
      else return null
      
      })}
      </div>

    </>
  )
}

export default SeachInput