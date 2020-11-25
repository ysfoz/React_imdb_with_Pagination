import {useRef} from 'react'
import { StyledSearchInput, StyledSearchWrapper,StyledLogo } from './SearchBar.style'
import Logo from '../../assets/1.png'
import PopcornLogo from '../../assets/2.png'

function SearchBar(props) {
    const SearchRef = useRef()
   
    return (
        <StyledSearchWrapper>
            <StyledLogo src={Logo}/>
            <StyledSearchInput placeholder='Search . . .' onChange= {e => props.SearchMovie(e.target.value)} />
            <StyledLogo src={PopcornLogo}/>
        </StyledSearchWrapper>
    )
}

export default SearchBar;
