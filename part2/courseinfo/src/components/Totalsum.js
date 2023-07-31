

const Totalsum = ({content})=>{
    const total = content.reduce(function(sum, part){
        return sum + part.exercises
      },0)
    
    return(
        <div>
            <p>
                <b>total of {total} exercises</b>
            </p>
        </div>
    )
}
export default Totalsum