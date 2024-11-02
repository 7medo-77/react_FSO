import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [counter, setCounter] = useState(0);

  // setTimeout(
  //   () => setCounter(counter + 1), 12000
  // )
  // console.log(useState(counter));

  return (
    <>
      <p>{counter}</p>
    </>
  )
}

export default App
