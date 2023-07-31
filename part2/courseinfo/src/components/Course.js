import Header from './Header'
import Content from './Content'
import Totalsum from './Totalsum'
const Course =({course}) =>{
    return(
        <div>
            <Header course = {course[0]}/>
            <Content content = {course[0].parts}/>
            <Totalsum content = {course[0].parts}/>
            <div>
                <Header course = {course[1]}/>
                <Content content = {course[1].parts}/>
            </div>
        </div>
    )
}

export default Course