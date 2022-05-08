import React from 'react';
import { Card } from '../card/card.component';
import {PlusMenu} from '../plusMenu/plus.component'

import './list.styles.css';

export const CardList = props  =>  (
    <div className ="card-list">
         {
          props.persons.map(person => (
              <div className='studentInfo'>
                <Card key={person.id} person={person} />
              </div>
          ))
        }
    </div>
)