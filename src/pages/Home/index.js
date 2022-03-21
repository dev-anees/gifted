import {useState} from 'react'

import Search from './components/Search'


const API_KEY = ""

const Home = () => {
  const [gifs, setGifts] = useState([])

  const onSubmit = (value) => {
    // use async await
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${value}`).then((response) => {
      return response.json()
    }).then((responseJson) => {
      console.log({responseJson})
      setGifts(responseJson.data)
    });
  }

  return (
    <>
    <Search onSubmit={onSubmit}/>
     <div style={{display: "flex", flexWrap: 'wrap'}}>
      {!!gifs.length && gifs.map((gifItem) => (
        <img src={gifItem.images.original.url} height="300" key={gifItem.id}/>
      ))}
    </div>
    </>
  )
}

export default Home;