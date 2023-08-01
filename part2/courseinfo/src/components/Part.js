const Part = ({part}) =>{
    console.log(part[0]);
    return(
        <div>
            <p>{part.name} {part.exercises}</p>
        </div>
    )
}


export default Part