import axios from 'axios';
import { useEffect, useState, createContext } from 'react';
import {apiKey} from './ApiKey'
import Pagination from './components/Pagination/Pagination.index'


// import SearchBar from './components/SearchBar/SearchBar.index'

import CardList from './components/cardList/CardList.index'


const baseUrl = 'https://api.themoviedb.org/3/search/movie'
const baseImageUrl = "https://image.tmdb.org/t/p/w500"

export const MovieContext  = createContext();

function App() {
const [movieData,setMovieData] = useState([]);
const [loading,setLoading] = useState(false);
const [currentPage,setCurrentPage] = useState();


  async function getData() {
    setLoading(true) // hata verirse bunu kontrol et
    try {
      const {data} = await axios.get(baseUrl,{
        params:{
          api_key:apiKey,
          page:currentPage,
          query:'lord'
        } 
      }) 
        setMovieData(data)
        setLoading(false)
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => getData(),[currentPage])

  
 
console.log(movieData)

const paginate = number => setCurrentPage(number + 1)
console.log('current',currentPage)


  return (
    <div>
      <MovieContext.Provider value={{ movieData, baseImageUrl,loading }}>
          {/* <SearchBar/> */}
          <CardList />
          <Pagination paginate={paginate}/>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
