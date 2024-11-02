import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (props) => {
  const bornYear = () => {
    const thisYear = new Date().getFullYear();
    return thisYear - props.age;
  }
  return (
    <>
      <p>
        Hello, {props.name}, you are {props.age} years old!
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
  const nameArray = ['Ahmed', 'Mohamed', 'Mahmoud'];

  return (
    <div>
      <h1> Greetings! </h1>
      <p>
        {nameArray}
      </p>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App
