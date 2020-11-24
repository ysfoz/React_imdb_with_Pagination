import Card from '../Card/Card.index';
import { useContext } from 'react';
import {MovieContext} from '../../App';
import './CardList.style.scss'

export default function CardList() {
    const consumer = useContext(MovieContext)
    // console.log("🚀 ~ file: CardList.index.js ~ line 7 ~ CardList ~ baseImageUrl", baseImageUrl)
    console.log(consumer.movieData)
    return (
        <div>
           {
               consumer.movieData.map((movie,i) => <Card key = {i} title={movie.title} src = {consumer.baseImageUrl + movie.poster_path} />)
           }
        </div>
    )
}
