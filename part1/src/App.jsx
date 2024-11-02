import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = ({ name, age }) => {
  const bornYear = () =>  new Date().getFullYear() - age
  return (
    <>
      <p>
        Hello, {name}, you are {age} years old!
      </p>
      <p>
        You were born in {bornYear()}
      </p>
    </>
  )
}

const App = () => {
  const name = 'Peter';
  const age = 10;

  return (
    <div>
      <h1> Greetings! </h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App
