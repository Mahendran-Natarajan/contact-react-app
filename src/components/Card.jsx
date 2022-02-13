import React from "react";

function Card(props) {
    return <card>
    <h1>{props.name}</h1>
    <img src={props.image} alt="Alt Img" />
    <p>{props.phone}</p>
    <p>{props.email}</p>
</card>;
}

export default Card;