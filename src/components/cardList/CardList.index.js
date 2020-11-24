import Card from '../Card/Card.index';
import { useContext } from 'react';
import {MovieContext} from '../../App';
import {StyledCardList} from "./CardList.style"

export default function CardList() {
    const consumer = useContext(MovieContext)
    if (consumer.loading){
        return <h2>Loading. . . </h2>
    }
    
    return (
        <StyledCardList>
           {
               consumer.movieData?.results?.map((movie,i) => <Card key = {i} title={movie.title} src = {consumer.baseImageUrl + movie.poster_path} />)
           }
        </StyledCardList>
    )
}
