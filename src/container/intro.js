import React from 'react'

import { Intro } from '../components'

export function IntroContainer(){
    return(
        <Intro>
            <Intro.Title>Hi! I am Sumesh Naskar</Intro.Title>
            <Intro.Text>Front-end developer</Intro.Text>
            <Intro.Button>Resumé</Intro.Button>
            <Intro.Arrow/>
            <Intro.Text>Project</Intro.Text>
        </Intro>
    )
}