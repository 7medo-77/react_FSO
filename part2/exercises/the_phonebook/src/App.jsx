import { useState, useEffect } from 'react'
import axios from 'axios'
import Number from './components/Number.component'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then((response) => {
        console.log(response.data);
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearchString = (event) => {
    setSearchString(event.target.value);
  }

  const handleNewPerson = (event) => {
    event.preventDefault()
    const personNameArray = persons.map(person => person.name)

    if (personNameArray.includes(newName)) {
      alert(`${newName} already exists in phonebook`)
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(newPerson));
      console.log(persons)
    }
    setNewName('');
    setNewNumber('');
  }

  const allResultsArray = searchString === '' ?
    persons
    : persons.filter((person) => {
    const regexPattern = RegExp(searchString, 'i');
    return person.name.match(regexPattern)
  })

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        <fieldset>
          <legend>Search</legend>
          Name: <input onChange={handleSearchString} value={searchString} />
        </fieldset>
      </div>

      <form onSubmit={handleNewPerson} >
        <fieldset>
          <legend>Add Name</legend>
          <div>
            name: <input onChange={handleNameChange} value={newName} />
          </div>
          <div>
            number: <input onChange={handleNumberChange} value={newNumber} />
          </div>
          <div>
            <button type="submit" >add</button>
          </div>
          <div>debugName: {newName}</div>
          <div>debugNumber: {newNumber}</div>
        </fieldset>
      </form>

      <h2>Numbers</h2>
      {
        allResultsArray.map((person) => {
          return (
            <Number key={person.name} name={person.name} number={person.number} />
          )
        })
      }
    </div>
  )
}

export default App
