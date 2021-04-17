import React from 'react';
import ActorsModel from '../../model/ActorsModel'

function MainSection() {
    return (
        <div>
            <BoxWarper/>
        </div>
    )

}

function BoxWarper() {
    const actors = [
        new ActorsModel("Jim Carey", 1962, "img/Jimcarey.jpg"),
        new ActorsModel("Tom Cruise", 1962, "img/Tom_Cruise.jpg"),
        new ActorsModel("Gary Oldman", 1958, "img/Gary_Oldman.jpg"),
        new ActorsModel("Natalie Portman", 1981, "img/Portman.jpg"),
        new ActorsModel("jean claude van dam", 1979, "img/vandam.jpg"),
        new ActorsModel("Gal Gadot", 1985, "img/galgadot.jpg"),
        new ActorsModel("Edward Norton", 1969, "img/Ed_Norton.jpg"),
    ]

    const myStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "black"
    }

    const actorsCard = actors.filter(actor => actor.name.startsWith("T")).map(actor => <Box {...actor} actorBirthDate={actor.ActorAge()}/>) 

    return (
        <div style={myStyle}>
            { actorsCard }
        </div>
    )
}

function Box(props) {
    const myStyle = {
        borderRadius: "3px",
        textAlign: "center",
        padding: "20px",
        margin: "10px",
        backgroundColor: "goldenrod",
        boxShadow: "5px 10px 18px red"
    }
   
    return (
        <div style={myStyle}>
            <Img picPath={props.pic}/>
            <TextContent actorName={props.name} actorBirthDate={props.actorBirthDate}/>
        </div>
    )
}

function Img({picPath}) {


    return (
        <div>
        <img src={picPath} alt=""   />
        </div>
    )
}

function TextContent({actorName, actorBirthDate}) {
    const myStyle = {
        marginTop: "20px"
    }

    return (
        <div style={myStyle}>
           <h2><a href="https://github.com/nirch/car-app-react/tree/main/src/pages/CarsPage">{actorName} </a></h2>
           <h3>{actorBirthDate}</h3>
        </div>
    )
}

export default MainSection;