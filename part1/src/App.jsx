import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
    console.log(allClicks.length);
    addClick([...allClicks, '-L']);
    console.log(allClicks.length+1);
    // addTotalClicks(totalClicks + 1);
  }

  const incrementLeft = () => {
    setCount({
      ...count,
      left: count.left + 1
    });
    console.log(allClicks.length);
    addClick([...allClicks, '+L']);
    console.log(allClicks.length+1);
    // addTotalClicks(totalClicks + 1);
  }

  const decrementRight = () => {
    setCount({
      ...count,
      right: count.right - 1
    });
    console.log(allClicks.length);
    addClick([...allClicks, '-R']);
    console.log(allClicks.length+1);
    // addTotalClicks(totalClicks + 1);
  }

  const incrementRight = () => {
    setCount({
      ...count,
      right: count.right + 1
    });
    console.log(allClicks.length);
    addClick([...allClicks, '+R']);
    console.log(allClicks.length+1);
    // addTotalClicks(totalClicks + 1);
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

      <DisplayClickHistory allClicks={allClicks} />
      <div>
        {allClicks}
      </div>
    </div>
  )
}

export default App
