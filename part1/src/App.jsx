import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = (props) => {
  const { counter } = props;
  return (
    <>
      <p>{counter}</p>
    </>
  )
}

export default App
