import { useState } from 'react'
import Note from './components/Note'


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    'a new note...'
  )

  const addNote = (event) => {
    event.preventDefault()
    console.log(newNote)

    const newNoteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
    }

    setNotes(notes.concat(newNoteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    // console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
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
