import React from 'react';

import './card.styles.css';



export const Card = props => (
    <div className='container'>
        <img src={props.person.pic} alt="Student pictures"/>
        <h1>{props.person.firstName} {props.person.lastName}</h1>
        <p>Email: {props.person.email}</p>
        <p>Company: {props.person.company}</p>
        <p>Skill: {props.person.skill}</p>
        <p>Average: {props.person.grades.map(function(x,i,arr){return x/arr.length}).reduce(function(a,b){return a + b})}%</p>
    </div>

)