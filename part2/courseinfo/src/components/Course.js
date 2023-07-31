import Header from './Header'
import Content from './Content'
import Totalsum from './Totalsum'
const Course =({course}) =>{
    return(
        <div>
            <Header course = {course}/>
            <Content content = {course.parts}/>
            <Totalsum content = {course.parts}/>
        </div>
    )
}

export default Course