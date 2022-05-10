import './App.css';
import React from 'react'

import { CardList } from './components/list/list.component'
import { SearchBox } from './components/search/search.component'


function App() {
  const[persons, setPersons] = React.useState([]);
  const[searchField, setSearchField] = React.useState('');
  const[searchTag, setSearchTag] = React.useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.hatchways.io/assessment/students');
      const personsData = await response.json();
      setPersons(personsData.students);
      }  
    fetchData();
   
  },[])

  const search = (persons) =>{
    if(searchField === '' && searchTag === '') return persons
    let result = []
    if(searchField !== ''){
      let firstNameResult = persons.filter( (person) => person.firstName.toLowerCase().includes(searchField.toLowerCase()));
      let lastNameResult = persons.filter( (person) => person.lastName.toLowerCase().includes(searchField.toLowerCase()));
      result = firstNameResult.concat(lastNameResult)
    }
    let tagResult = []
    if(searchTag !== ''){
      tagResult = persons.filter( (person) => {
        if(typeof person.tags != 'undefined'){
          
          return  person.tags.join('').includes(searchTag.toLowerCase())
        }
        return false
      })
    }
    return result.concat(tagResult)
  }


  return(
    
    <div className="App">
      <div className='app_container'>
        
      <div className='search'>

        <SearchBox 
        placeholder="Search by name"
        handleChange = {e=>{setSearchField(e.target.value)}}
        />

        <SearchBox 
        placeholder="Search by tag"
        handleChange = {e=>{setSearchTag(e.target.value)}}
        />
      </div>
      
      <CardList persons={search(persons)} />
      </div>
      
     
  </div>
    
  )
}

 
export default App;
