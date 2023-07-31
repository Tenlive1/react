import Header from './Header'
import Content from './Content'

const Course =({course}) =>{
    return(
        <div>
            <Header course = {course}/>
            <Content content = {course.parts}/>
        </div>
    )
}

export default Course