import axios from 'axios';
import { useEffect, useState, createContext } from 'react';
import {apiKey} from './ApiKey'
import './App.css'

import CardList from './components/cardList/CardList.index'


const baseUrl = 'https://api.themoviedb.org/3/search/movie'
const baseImageUrl = "https://image.tmdb.org/t/p/w500"

export const MovieContext  = createContext();

function App() {
const[movieData,setMovieData] = useState([])

  async function getData() {
    try {
      const {data} = await axios.get(baseUrl,{
        params:{
          api_key:apiKey,
          page:1,
          query:'matrix'
        } 
      }) 
        setMovieData(data.results)
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => getData(),[])



  return (
    <div>
      <MovieContext.Provider value={{ movieData, baseImageUrl }}>
          <CardList />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
