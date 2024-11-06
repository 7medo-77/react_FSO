import { useState } from 'react'

const DisplayHighest = (props) => {
  const highestVoteTuple = Object.entries(props.votesProp) .reduce((accumulator, iterator) => {
    const max = Math.max(accumulator[1], iterator[1])
    if (max === accumulator[1]) {
      return accumulator
    } else {
      return iterator
    }
  })
  const highestIndex = highestVoteTuple[0];
  // console.log(highestVote[0])
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdoteArray[highestIndex-1]}</p>
    </>
  )
}


function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votesObject, setVote] = useState({
    1: 0, 2: 0, 3: 0,
    4: 0, 5: 0, 6: 0,
    7: 0, 8: 0,
  })

  const handleIndexVote = () => {
    const copyVotesObject = votesObject;
    copyVotesObject[selected+1] += 1;
    setVote(copyVotesObject);
    console.log(votesObject);
  }

  const handleRandomIndex = () => {
    const randomIndex = getRandomInt(0, anecdotes.length);
    setSelected(randomIndex);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <article>{anecdotes[selected]}</article>
      <button onClick={handleIndexVote} >Vote</button>
      <button onClick={handleRandomIndex} >Change</button>
      <DisplayHighest votesProp={votesObject} anecdoteArray={anecdotes} />
    </div>
  )
}

export default App
