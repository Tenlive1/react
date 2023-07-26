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
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <Header text = "give feedback"/>
      <Button handleClick={() =>{setGood(good +1)}} text ="good"/>
      <Button handleClick={() =>{setNeutral(neutral +1)}} text ="neutral"/>
      <Button handleClick={() =>{setBad(bad +1)}} text ="bad"/>
      <Header text = "statistics"/>

      <Review review ={good} text = "good"/>
      <Review review ={neutral} text = "neutral"/>
      <Review review ={bad} text = "bad"/>

    </div>
  )
  
}

export default App