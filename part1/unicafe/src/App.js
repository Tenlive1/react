import { useState } from 'react'


const Header = (props) =>{

  return(
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}

const Button = (props) =>{
  
  return(
    <button onClick = {props.handleClick}>
    {props.text}
    </button>
  )
}
const Review =(props) =>{
  return(
    <div>
      {props.text} {props.review}
    </div>
  )
}
const Total = (props) =>{
  return(
    <div>
      all {props.all}
    </div>
  )
}
const Average =(props) =>{
  return(
    <div>
      {props.text} {props.average}
    </div>
  )
}
const Positive = (props) =>{
  return(
    <div>
      {props.text} {props.average} %
    </div>
  )
}
const Statistics = (props) =>{
  return(
    <>
    <Review review ={props.good} text = "good"/>
    <Review review ={props.neutral} text = "neutral"/>
    <Review review ={props.bad} text = "bad"/>
    <Total all={props.all}/>
    <Average text ="average" average={(props.good-props.bad) / props.all}/>
    <Positive text = "positive" average = {(props.good / props.all) * 100}/>
    </>



  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  return (
    <div>
      <Header text = "give feedback"/>
      <Button handleClick={() =>{setGood(good +1); setAll(all+1)}} text ="good"/>
      <Button handleClick={() =>{setNeutral(neutral +1); setAll(all+1)}} text ="neutral"/>
      <Button handleClick={() =>{setBad(bad +1); setAll(all+1)}} text ="bad"/>
      <Header text = "statistics"/>
      
      <Statistics good={good} neutral={neutral} bad ={bad} all ={all}/>
      
      

      

    </div>
  )
  
}

export default App