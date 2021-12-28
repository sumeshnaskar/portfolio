import React, {useState, useEffect} from 'react'
import { Element, Link } from 'react-scroll'
import { Project,Intro } from '../components'
import projectData  from '../helper/images.json'

export function ProjectContainer(){
    const [ displayProject, setDisplayProject ] = useState(0)
    const [ displayFirst, setDisplayFirst ] = useState(false)

    useEffect(() => {
        if (displayProject || displayFirst) {
            setDisplayFirst(!displayFirst)
        }
      }, [displayProject])

    return (
        <Project >
            <Project.Wrapper style = {{justifyContent: "flex-end"}}>
            <Link  
                                duration = {10} 
                                to = "project" 
                                spy = {true} 
                                smooth = {true}
                            >
                {displayProject > 0 &&
                <Project.Button 
                    onClick = { () => {
                        setDisplayProject(displayProject - 1)
                        if (displayProject === 0){ setDisplayFirst(!displayFirst) }
                        }} 
                >
                    Prev
                </Project.Button>}
                { displayProject < projectData.length - 1  && 
                <Project.Button 
                    onClick = { () => setDisplayProject(displayProject + 1)} 
                >
                    Next
                </Project.Button> }       
                </Link>       
            </Project.Wrapper>
           {projectData.map( (project, index) => (
               index === displayProject &&             
                <Project.Inner  key={index} image = {process.env.PUBLIC_URL + project.image}>
                    <Project.Image src = {process.env.PUBLIC_URL + project.image}/>
                    <Project.Group>
                        <Project.Title>{project.title}</Project.Title>
                        <Project.Wrapper>
                            <Project.ButtonExt href = {project.live}>Live</Project.ButtonExt>
                            <Project.ButtonExt href = {project.github}>Github</Project.ButtonExt>
                        </Project.Wrapper>
                        {project.feature.map( (feature, index) => (
                            <Project.Description key={index}>
                                {feature}
                            </Project.Description> 
                        ))}
                        <Project.Note>
                            {project.description}
                        </Project.Note>     
                    </Project.Group>   
                </Project.Inner>  
           ))}
            <Project.Wrapper style = {{justifyContent: "flex-end"}}>
                {displayProject > 0 &&
                <Project.Button 
                    onClick = { () => setDisplayProject(displayProject - 1)} 
                >
                    Prev
                </Project.Button>}
                <Link  
                    duration = {10} 
                    to = "project" 
                    spy = {true} 
                    smooth = {true}
                >
                { displayProject < projectData.length - 1  && 
                <Project.Button 
                    onClick = { () => setDisplayProject(displayProject + 1)} 
                >
                    Next
                </Project.Button> }  
                </Link>            
            </Project.Wrapper> 
            <Element id='about'/>
            <Intro.Arrow/>
            <Intro.Text style ={{ color: "#111"}}>About</Intro.Text>
        </Project>
        

          
    )
}