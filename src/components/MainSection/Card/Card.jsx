import React from 'react';
import Img from '../Card/Img'
import TextContent from '../Card/TextContent'
import './Card.css'



function Card(props) {

    const myStyle = {
        borderRadius: "3px",
        textAlign: "center",
        padding: "20px",
        margin: "10px",
        backgroundColor: "goldenrod",
        boxShadow: "5px 10px 18px red"
    }

    return (
        <div className="Card">
           <Img pic={props.pic}/>
           <TextContent imdb={props.imdb} actorName={props.firstName +" "+props.lastName} birthDate={props.birthDate}/>
        </div>
    )
}

export default Card;
