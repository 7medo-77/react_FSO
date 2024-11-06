import { useState } from 'react'

const StatisticLine = (props) => {
  console.log(props);
  return (
    <p>
      {props.text}: {props.value}{props.text === 'positive' ? '%' : ''}
    </p>
  )
}

const Statistics = (props) => {
  return (
    <>
      <h1>statistics</h1>
      {
        props.statProp.all !== 0 ?
          <>
            <StatisticLine text={props.goodText} value={props.badProp} />
            <StatisticLine text={props.neutralText} value={props.neutralProp} />
            <StatisticLine text={props.badText} value={props.badProp} />
            <StatisticLine text={props.allText} value={props.statProp.all} />
            <StatisticLine text={props.averageText} value={props.statProp.average} />
            <StatisticLine text={props.positiveText} value={props.statProp.positive} />
          </>
          : <p>No feedback given</p>
      }
    </>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [statObject, setStatObject] = useState({
    average: 0,
    positive: 0,
    all: 0,
  })

  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
    setStatObject({
      all: statObject.all + 1,
      average: (good + bad * -1) / (statObject.all + 1),
      positive: good / (statObject.all + 1) * 100
    })
  }

  const handleGoodFeedback = () => {
    setGood(good + 1);
    setStatObject({
      all: statObject.all + 1,
      average: ((good + 1) + bad * -1) / (statObject.all + 1),
      positive: (good + 1) / (statObject.all + 1) * 100
    })
  }

  const handleBadFeedback = () => {
    setBad(bad + 1);
    setStatObject({
      all: statObject.all + 1,
      average: (good + (bad + 1) * -1) / (statObject.all + 1),
      positive: (good) / (statObject.all + 1) * 100
    })
  }

  return (
    <div>
      <h1>give feedback </h1>
      <Button onClick={handleGoodFeedback} text='good' />
      <Button onClick={handleNeutralFeedback} text='neutral' />
      <Button onClick={handleBadFeedback} text='bad' />
      <Statistics
        goodText='good'
        goodProp={ good }
        neutralText='neutral'
        neutralProp={neutral}
        badText='bad'
        badProp={bad}

        allText='all'
        averageText='average'
        positiveText='positive'
        statProp={statObject}
      />
    </div>
  )
}

export default App
