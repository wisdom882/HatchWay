import React, { useState } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, fa5, faS} from '@fortawesome/free-solid-svg-icons';
import { Tag } from '../tag/tag.component';
import './card.styles.css';



export const Card = props => {
    const [toggle, setToggle] = useState(true)
    const handleClick = (event) =>{
        setToggle(!toggle)
    }

    return(
        <div className='container'>
        <div className='image'>
                <img src={props.person.pic} alt="Student pictures" className='robot'/>
        </div>

        <div className='student_info'>
            <h1>{props.person.firstName} {props.person.lastName}</h1>
            <p>Email: {props.person.email}</p>
            <p>Company: {props.person.company}</p>
            <p>Skill: {props.person.skill}</p>
            <p>Average: {props.person.grades.map(function(x,i,arr){return x/arr.length}).reduce(function(a,b){return a + b})}%</p>

            <div className={toggle? "hidden": "show"}>

            <p>Test 1:    {props.person.grades[0]}%</p>
            <p>Test 2:    {props.person.grades[1]}%</p>
            <p>Test 3:    {props.person.grades[2]}%</p>
            <p>Test 4:    {props.person.grades[3]}%</p>
            <p>Test 5:    {props.person.grades[4]}%</p>
            <p>Test 6:    {props.person.grades[5]}%</p>
            <p>Test 7:    {props.person.grades[6]}%</p>
            <p>Test 8:    {props.person.grades[7]}%</p>
            </div>
            <Tag person={props.person}/>
        </div>

        <div className='plus'>
           
            <button className='plus_button' onClick={handleClick}>  {toggle?(<FontAwesomeIcon icon={faPlus} className="font_plus"/>):(<FontAwesomeIcon icon={faMinus} className="font_plus"/>)}</button> 
        </div>
    </div>
    )
   

}