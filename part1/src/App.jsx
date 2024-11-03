import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [right, setRight] = useState(0);
  const [left, setLeft] = useState(0);

  const decrementFunction = () => {
    setCounter(counter - 1);
  }

  const incrementFunction = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <button onClick={() => setRight(right + 1)} >Right</button>
      {right}
      <button onClick={() => setLeft(left + 1)} >Left</button>
      <p>{left}</p>
    </div>
  )
}

export default App
