import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const ChangeButton = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const DisplayClickHistory = ({allClicks}) => {
  return (
    <>
    {allClicks.length === 0 ? `App to show all clicks` : allClicks.join(', ')}
    </>
  )
}

const App = () => {
  const [count, setCount] = useState({
    right: 0,
    left: 0,
  });
  const [allClicks, addClick] = useState([]);
  const [totalClicks, addTotalClicks] = useState(0);

  const decrementLeft = () => {
    setCount({
      ...count,
      left: count.left - 1
    });
    addClick([...allClicks, '-L']);
    addTotalClicks(totalClicks + 1);
  }

  const incrementLeft = () => {
    setCount({
      ...count,
      left: count.left + 1
    });
    addClick([...allClicks, '+L']);
    addTotalClicks(totalClicks + 1);
  }

  const decrementRight = () => {
    setCount({
      ...count,
      right: count.right - 1
    });
    addClick([...allClicks, '-R']);
    addTotalClicks(totalClicks + 1);
  }

  const incrementRight = () => {
    setCount({
      ...count,
      right: count.right + 1
    });
    addClick([...allClicks, '+R']);
    addTotalClicks(totalClicks + 1);
  }

  return (
    <div>
      <div>
        <ChangeButton handleClick={decrementLeft} text='Decrement'/>
        {count.left}
        <ChangeButton handleClick={incrementLeft} text='Increment'/>
      </div>
      <div>
        <ChangeButton handleClick={decrementRight} text='Decrement'/>
        {count.right}
        <ChangeButton handleClick={incrementRight} text='Increment'/>
      </div>

      <DisplayClickHistory allClicks={allClicks} />
      <div>
        {allClicks}
      </div>
    </div>
  )
}

export default App
