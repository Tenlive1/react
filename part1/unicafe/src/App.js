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
    <>
        <tr>
          <td style={{width:0}} >{props.text}</td>
          <td>{props.review}</td>
        </tr>
    </>
  )
}
const Total = (props) =>{
  return(
    <>
      <tr>
        <td>all</td>
        <td>{props.all}</td> 
      </tr>
    </>
  )
}
const Average =(props) =>{
  return(
    <>
        <tr>
          <td >{props.text}</td>
          <td>{props.average}</td>
        </tr>
    </>
  )
}
const Positive = (props) =>{
  return(
    <>
        <tr>
          <td>{props.text}</td>
          <td>{props.average} %</td>
        </tr>
    </>
  )
}
const Statistics = (props) =>{
  if(props.all === 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  
  return(
    <table>
      <tbody>
        <Review review ={props.good} text = "good"/>
        <Review review ={props.neutral} text = "neutral"/>
        <Review review ={props.bad} text = "bad"/>
        <Total all={props.all}/>
        <Average text ="average" average={(props.good-props.bad) / props.all}/>
        <Positive text = "positive" average = {(props.good / props.all) * 100}/>
    </tbody>
    </table>



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
//done
export default App