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
        // console.log('response fulfilled');
        setNotes(response.data)
      })
  }, [])

  console.log('render', notes.length, 'notes');

  const addNote = (event) => {
    event.preventDefault();

    const newNoteObject = {
      id: (notes.length + 1).toString(),
      content: newNote,
      important: Math.random() < 0.5
    };

    axios.post('http://localhost:3001/notes', newNoteObject)
      .then((resopnse) => {
        console.log(resopnse);
        setNotes(notes.concat(newNoteObject));
        setNewNote('');
      })
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

  const handleNoteChange = (event) => {
    // console.log(event.target.value)
    setNewNote(event.target.value)
  };

  // const toggleImportanceOf = (id) => {
  //   console.log(`note with id: ${id} needs to be toggled`);
  //   const noteToEdit = notes.filter((note) => note.id === id)[0]
  //   // WRONG: never mutate state!
  //   noteToEdit.important = !noteToEdit.important
  //   // RIGHT: create a new copy
  //   const newNote = {...noteToEdit, important: !noteToEdit.important}
  //   // const notesEdited = notes.filter((note) => note.id !== id)
  //   console.log(notes)
  //   const newNotes = notes.map((note) => note.id === id ? newNote : note)
  //   console.log(newNotes)
  //   // ...axios.put(...setNotes(newNotes))
  // }

  const toggleImportanceOf = async (id) => {
    const noteURL = `http://localhost:3001/notes/${id}`;
    // const noteToEdit = notes.find((note) => note.id === id);
    const noteToEdit = await axios.get(noteURL)
      .then((response) => response.data)
    const changedNote = {...noteToEdit, important: !noteToEdit.important}
    axios.put(noteURL, changedNote)
      .then(response => {
        setNotes(notes.map((note) => note.id === id ? response.data : note))
      })
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>

      <div>
        <button onClick={() => setShowAll(!showAll)}> Show { showAll ? 'Important' : 'All' } </button>
      </div>

      <div>
        DEBUG:
        {
          notes.map((note) => {
            return (
              <p key={note.id}>{note.id} {note.content} {note.important.toString()}</p>
            )
          })
        }
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
