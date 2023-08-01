import Part from './Part'
const Content = ({content}) =>{
   return (
    <div>
        {content.map((part)=>
            <Part part = {part}/>
        )}
    </div>
   )
}

export default Content