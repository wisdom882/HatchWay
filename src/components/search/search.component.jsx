import React from 'react';

import './search.styles.css'

export const SearchBox = ({placeholder, handleChange}) => (
    <input type="text"
    className="search_text"
    placeholder={placeholder}
    onChange= { handleChange}/>
)