import {StyledCardWrapper, StyledText, StyledMovieImage} from "./Card.style"

export default function Card(props) {
    return(
        <StyledCardWrapper>
            <StyledMovieImage src = {props.src}/>

            <StyledText>{props.title}</StyledText>
        </StyledCardWrapper>
)    
}

