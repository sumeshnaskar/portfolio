import React from 'react'

import { Project } from '../components'

export function ProjectContainer(){
    return (
        <Project>
            <Project.Inner>
            <Project.Image src = {process.env.PUBLIC_URL + '/images/shorturl-image.png'}/>
            <Project.Group>
                <Project.Title>Shortly</Project.Title>
                <Project.Wrapper>
                <Project.Button>Live</Project.Button>
                <Project.Button>Github</Project.Button>
                </Project.Wrapper>
                <Project.Description>
                    This is project description.
                </Project.Description>     
            </Project.Group>   
            </Project.Inner>      
            <Project.Wrapper style = {{justifyContent: "flex-end"}}>
                <Project.Button style = {{backgroundColor: "#111", color: "#fff", borderRadius: "0" }}>
                    Prev
                </Project.Button>
                <Project.Button style = {{backgroundColor: "#111", color: "#fff", borderRadius: "0"}}>
                    Next
                </Project.Button>
            </Project.Wrapper> 
        </Project>
          
    )
}