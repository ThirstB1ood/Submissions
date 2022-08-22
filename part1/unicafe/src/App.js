import { useState } from 'react'

const Heading = ({ heading }) => <h1>{heading}</h1>

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({ good, neutral, bad }) => {
  const countOfStatistics = good + neutral + bad

  const average = (good - bad) / countOfStatistics

  const percent = good * 100 / countOfStatistics

  if(countOfStatistics === 0) return <div>No feedback given</div>
  return (
    <table>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={countOfStatistics} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={percent + ' %'} />
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const plusToGood = () => setGood(good + 1)
  const plusToNeutral = () => setNeutral(neutral + 1)
  const plusToBad = () => setBad(bad + 1)
  const resetAll =() => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  }

  return (
    <div>
      <Heading heading={'give feedback'} />
      <Button onClick={plusToGood} text={'good'} />
      <Button onClick={plusToNeutral} text={'neutral'} />
      <Button onClick={plusToBad} text={'bad'} />
      <Button onClick={resetAll} text={'reset'} />
      <Heading heading={'statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App