import React from 'react';
import "../UI/Card.css";

function Card(props){
    const classes = 'card ' + props.className;

    //props.children, where children is a JS inbuilt property
    return <div className={classes}>{props.children}</div>
}

export default Card;