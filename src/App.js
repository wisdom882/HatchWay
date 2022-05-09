import './App.css';
import React from 'react'

import { CardList } from './components/list/list.component'
import { SearchBox } from './components/search/search.component'


function App() {
  const[persons, setPersons] = React.useState([]);
  const[searchField, setSearchField] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.hatchways.io/assessment/students');
      const personsData = await response.json();
      setPersons(personsData.students);
      console.log(personsData)
      }  
    fetchData();
   
  },[searchField])



  return(
    
    <div className="App">
      <div className='app_container'>
        
      <div className='search'>

        <SearchBox 
        placeholder="Search by name"
        handleChange = {e=>{setSearchField(e.target.value)}}
        />
      </div>
      
      <CardList persons={persons.filter( (person) => person.lastName.toLowerCase().includes(searchField.toLowerCase()))} />
      </div>
      
     
  </div>
    
  )
}

 
export default App;
