import { useState } from 'react'
function random(max,pre){
  let ran = Math.floor(Math.random() * max);
  if(ran === pre){
    ran = Math.floor(Math.random() * max);
  }

  
  return ran;
}
const Button = (props)=>{

  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  ) 
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0) // this will select the quotes
  
  const ran = random(anecdotes.length,selected) // this will make a random number
  const [num, setnum] = useState(0) // holding the random number
  const updatenum = ran;// updating the holder


  let arr = Array.apply(null, Array(anecdotes.length)).map(function () { return 0; });// making the array
  const [votes, setvotes] = useState(arr);// setting the array in a state

  function handleIncrementClick(index) {// function will increment
    const nextVotes = votes.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setvotes(nextVotes);
  }
  
  return (
    <div>
      {anecdotes[num]}
      <br></br>
      has {votes[num]} votes
      
      <div>
        <Button handleClick={() =>{handleIncrementClick(num);console.log(num );}} text="vote"/>
        <Button handleClick={()=>{setnum(updatenum); setSelected(num); console.log(updatenum )}} text= "next anecdotes" />
      </div>
    </div>
  )
  
}

export default App