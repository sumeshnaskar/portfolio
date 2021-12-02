import React from 'react'
import { Element } from 'react-scroll'
import { Intro } from '../components'

export function IntroContainer(){
    return(
        <Intro>
            <Element id='top'/>
            <Intro.Title>Hi! I am Sumesh Naskar</Intro.Title>
            <Intro.Text>Front-end developer</Intro.Text>
            <Intro.Button>Resumé</Intro.Button>
            <Element id='project'/>
            <Intro.Arrow/>
            <Intro.Text>Project</Intro.Text>
        </Intro>
    )
}