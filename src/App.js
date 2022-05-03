import './App.css';
import React from 'react'

import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'


function App() {
  const[persons, setPersons] = React.useState([]);
  const[searchField, setSearchField] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const personsData = await response.json();
      setPersons(personsData);
    }

    fetchData();
   
  })



  return(
    
      <div className="App">
        <h1>Face Cards</h1>
        <SearchBox 
        placeholder="search persons"
        handleChange = {e=>{setSearchField(e.target.value)}}
        />
        <CardList persons={ persons.filter( person => person.name.toLowerCase().includes(searchField.toLowerCase()))} />
      </div>
    
  )
}


export default App;
