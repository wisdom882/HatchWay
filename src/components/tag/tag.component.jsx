import React, { useState} from "react";

import './tag.styles.css'

export const Tag = (props) =>{
    const [tag, setTag] = useState('')
    const handleChange = (event) => {
        setTag(event.target.value)
        console.log(tag)
    }

    const addTag = (person) =>{
        if (typeof person.tags === 'undefined'){
            person.tags = []
    
        }
        
        person.tags.push(tag)
        console.log(person)
    }

    return(
        <div>

            <div className="tag">
               {typeof props.person.tags != 'undefined' ? (
                   props.person.tags.map(t => {
                       return(
                           <div className="t">
                               {t}
                           </div>
                       )
                   })
               ) : (null)} 
            </div>
            
            <input 
                type='text'
                className="input"
                placeholder='Add a tag'
                onChange={handleChange} 
                onKeyPress={event => {
                    if(event.key === 'Enter'){
                    addTag(props.person)
                    }
            }}/>
        </div>
    )
}