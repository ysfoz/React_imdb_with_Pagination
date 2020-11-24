import axios from 'axios';
import { useEffect, useState, createContext } from 'react';
import {apiKey} from './ApiKey'
// import Pagination from './components/Pagination'


// import SearchBar from './components/SearchBar/SearchBar.index'

import CardList from './components/cardList/CardList.index'


const baseUrl = 'https://api.themoviedb.org/3/search/movie'
const baseImageUrl = "https://image.tmdb.org/t/p/w500"

export const MovieContext  = createContext();

function App() {
const [movieData,setMovieData] = useState([]);
const [loading,setLoading] = useState(false);
const [currentPage,setCurrentPage] = useState(1);
const [moviesPerPage,setMoviesPerPage] = useState(10);

  async function getData() {
    setLoading(true) // hata verirse bunu kontrol et
    try {
      const {data} = await axios.get(baseUrl,{
        params:{
          api_key:apiKey,
          page:1,
          query:'lord'
        } 
      }) 
        setMovieData(data)
        setLoading(false)
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => getData(),[])

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movieData?.results?.slice(indexOfFirstMovie,indexOfLastMovie)
 
console.log(movieData)


  return (
    <div>
      <MovieContext.Provider value={{ movieData, baseImageUrl,loading,currentMovies, }}>
          {/* <SearchBar/> */}
          <CardList />
          {/* <Pagination moviesPerPage = {moviesPerPage} totalMovies = {movieData.length}/> */}
      </MovieContext.Provider>
    </div>
  );
}

export default App;
