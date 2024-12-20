import { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'


const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log('useEffect hook initiated');
    axios
      .get('http://localhost:3001/notes')
      .then((response) => {
        console.log('response fulfilled');
        setNotes(response.data)
      })
  }, [])

  console.log('render', notes.length, 'notes');

  const addNote = (event) => {
    event.preventDefault()

    const newNoteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
    };
    setNotes(notes.concat(newNoteObject));
    setNewNote('');
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

  const handleNoteChange = (event) => {
    // console.log(event.target.value)
    setNewNote(event.target.value)
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>

      <div>
        <button onClick={() => setShowAll(!showAll)}> Show { showAll ? 'Important' : 'All' } </button>
      </div>

      <form onSubmit={addNote} >
        <fieldset>
          <legend>Add note</legend>
          <input value={newNote} onChange={handleNoteChange} />
          <button type='submit'>save</button>
        </fieldset>
      </form>
    </div>
  )
}

export default App
