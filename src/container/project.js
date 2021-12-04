import React, {useState, useEffect, useRef} from 'react'
import { Element } from 'react-scroll'
import { Project,Intro } from '../components'
import projectData  from '../helper/images.json'

const style = {
    backgroundColor: "#111", color: "#fff", borderRadius: "0", border: "1.5px solid #fff"
}

export function ProjectContainer(){
    const [ displayProject, setDisplayProject ] = useState(0)
    let focusRef = useRef()

    useEffect(() => {
        if (displayProject) {
            focusRef.current.focus()
        }
      }, [displayProject])

    return (
        <Project >
            <Project.Wrapper style = {{justifyContent: "flex-end"}}>
                {displayProject > 0 &&
                <Project.Button 
                    onClick = { () => setDisplayProject(displayProject - 1)} 
                    style = {style}
                >
                    Prev
                </Project.Button>}
                { displayProject < projectData.length - 1  && 
                <Project.Button 
                    onClick = { () => setDisplayProject(displayProject + 1)} 
                    style = {style}
                >
                    Next
                </Project.Button> }              
            </Project.Wrapper>
            <input 
                style =
                    {{
                        width: '0px', 
                        height: '0px', 
                        backgroundColor: 'rgba(0, 0, 0, 0.45)', 
                        outline: 'none', 
                        border: "none", 
                        cursor: "pointer", 
                        caretColor: "transparent"
                    }} 
                    ref={focusRef}
            />
           {projectData.map( (project, index) => (
               index === displayProject &&             
                <Project.Inner  key={index} image = {process.env.PUBLIC_URL + project.image}>
                    <Project.Image src = {process.env.PUBLIC_URL + project.image}/>
                    <Project.Group>
                        <Project.Title>{project.title}</Project.Title>
                        <Project.Wrapper>
                            <Project.Button href = {project.live}>Live</Project.Button>
                            <Project.Button href = {project.github}>Github</Project.Button>
                        </Project.Wrapper>
                        <Project.Description>
                            {project.description}
                        </Project.Description>     
                    </Project.Group>   
                </Project.Inner>  
           ))}
            <Project.Wrapper style = {{justifyContent: "flex-end"}}>
                {displayProject > 0 &&
                <Project.Button 
                    onClick = { () => setDisplayProject(displayProject - 1)} 
                    style = {style}
                >
                    Prev
                </Project.Button>}
                { displayProject < projectData.length - 1  && 
                <Project.Button 
                    onClick = { () => setDisplayProject(displayProject + 1)} 
                    style = {style}
                >
                    Next
                </Project.Button> }              
            </Project.Wrapper> 
            <Element id='about'/>
            <Intro.Arrow/>
            <Intro.Text style ={{ color: "#111"}}>About</Intro.Text>
        </Project>
        

          
    )
}