import { useState } from 'react'
import Number from './components/Number.component'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchString, setSearchString] = useState('')

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
