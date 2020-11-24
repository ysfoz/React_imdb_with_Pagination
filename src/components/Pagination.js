import React,{useContext} from 'react'
import {MovieContext} from '../App'

export default function Pagination() {
   const consumer = useContext(MovieContext) 
    const totolPage = consumer?.movieData?.total_pages
    const pageNumbers =  
    
    
    return (
        <nav>
            <ul>
            {for(let i = 1;i <=pageNumbers;i++ )(number =>(
                <li key={number}>
                    <a href='!#'>
                        {number}
                    </a>
                </li>
            ))}
            </ul>
            
        </nav>
    )
        }
