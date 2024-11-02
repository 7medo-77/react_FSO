import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const CounterButton = (props) => {
  console.log(props);

  return (
    <button onClick={props.onClick} >{props.text}</button>
  )
}

const DisplayCounter = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0);
  // console.log(counter);

  const decrementFunction = () => {
    setCounter(counter - 1);
  }

  const incrementFunction = () => {
    setCounter(counter + 1);
  }

  return (
    <>
      <CounterButton onClick={incrementFunction} text='Increment' />
      <DisplayCounter counter={counter} />
      <CounterButton onClick={decrementFunction} text='Decrement' />
    </>
  )
}

export default App
