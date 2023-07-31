import Part from './Part'
const Content = ({content}) =>{

    return(
        <div>
            <Part part = {content[0]} />
            <Part part = {content[1]} />
            <Part part = {content[2]} />
            <Part part = {content[3]} />
        </div>
    )
}

export default Content