import React from 'react'
import { About, Intro } from '../components'

export function AboutContainer(){
    return (
        <About>
            <About.Text>
                Hi! I am a software engineer with 2+ years of experience which I started with 
                the backend and later followed the HTML, CSS, and JS tradition before switching to React, 
                and since then, I have been looking for ways to showcase my abilities. 
                The projects in my portfolio and this website are all created using React. 
            </About.Text>
            <Intro.Arrow/>
            <Intro.Text style ={{ color: "#111"}}>Contact</Intro.Text>
        </About>
    )
}