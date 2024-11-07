import { useState } from 'react'
import  Note  from './components/Note.Component.jsx'
// import './App.css'

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notes.map(note => {
            return (
              <Note key={note.id} noteProp={note.content} />
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
