import React from 'react';

import './card.styles.css';



export const Card = props => (
    <div className="card-container">
        <img src={props.person.pic} alt="Student pictures"/>
        <h2>{props.person.firstName} {props.person.lastName}</h2>
        <p>{props.person.email}</p>
        <p>{props.person.company}</p>
        <p>{props.person.skill}</p>
        <p>Average: {props.person.grades.map(function(x,i,arr){return x/arr.length}).reduce(function(a,b){return a + b})}%</p>
    </div>
)