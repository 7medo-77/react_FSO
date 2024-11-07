import Header from './Header.Component'
import Part from './Part.Component'
import Total from './Total.Component'
import { useState } from 'react'

const Course = (props) => {
  const calculatedTotal = props.course.parts.reduce((accumulator, iterator) => {
      return accumulator += iterator.exercises;
    }, 0)
  console.log(calculatedTotal);

  const [totalExercise, setTotalExercise] = useState(calculatedTotal);

  const updateExerciseCount = () => {
    const newTotal = props.course.parts.reduce((accumulator, iterator) => {
      accumulator.exercises += iterator.exercises;
    }, 0)
    setTotalExercise(newTotal);
  }

  return (
    <>
      <Header header={props.course.name} />
      {
        props.course.parts.map((part) => {
          return (
            <Part name={part.name} key={part.id} exercises={part.exercises} />
          )
        })
      }
      <Total total={totalExercise} />
    </>
  )
}

export default Course
