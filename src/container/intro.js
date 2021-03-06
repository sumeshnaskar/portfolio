import React from 'react'
import { Element } from 'react-scroll'
import { Intro } from '../components'

export function IntroContainer(){
    return(
        <Intro>
            <Element id='top'/>
            <Intro.Title>Hire... Collab.. Connect.</Intro.Title>
            <Intro.Text>Front-end Developer</Intro.Text>
            
                <Intro.Button href={process.env.PUBLIC_URL + "/Resume.pdf"} download="Resume">Resumé</Intro.Button>
            
            <Element id='project'/>
            <Intro.Arrow/>
            <Intro.Text>Project</Intro.Text>
        </Intro>
    )
}