import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState({
    right: 0,
    left: 0,
  });
  const [allClicks, addClick] = useState([]);
  console.log(allClicks);

  const decrementLeft = () => {
    setCount({
      ...count,
      left: count.left - 1
    });
    addClick([...allClicks, '-L']);
  }

  const incrementLeft = () => {
    setCount({
      ...count,
      left: count.left + 1
    });
    addClick([...allClicks, '+L']);
  }

  const decrementRight = () => {
    setCount({
      ...count,
      right: count.right - 1
    });
    addClick([...allClicks, '-R']);
  }

  const incrementRight = () => {
    setCount({
      ...count,
      right: count.right + 1
    });
    addClick([...allClicks, '+R']);
  }

  return (
    <div>
      <div>
        <button onClick={decrementLeft} >Decrement</button>
        {count.left}
        <button onClick={incrementLeft} >Increment</button>
      </div>
      <div>
        <button onClick={decrementRight} >Decrement</button>
        {count.right}
        <button onClick={incrementRight} >increment</button>
      </div>
    </div>
  )
}

export default App
