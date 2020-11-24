import './Card.style.scss'

export default function Card(props) {
    return(
        <div>
            <img src = {props.src}/>
            <p>{props.title}</p>
        </div>
)    
}