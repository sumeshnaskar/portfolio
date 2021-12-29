import React from 'react'
import { Element } from 'react-scroll'
import { About, Intro } from '../components'

export function AboutContainer(){
    return (
        <About>
            <About.Text>
            Hi! I'm Sumesh Naskar, a solution-driven Software Developer with over 2+ years of experience. 
            Thrive in working in a fast-paced, high-tech environment with cross-functional teams using agile methodology.
            In my current job, I am working with golang and python but, curiosity in frontend technologies led me to a new path.
            I started upskilling myself in April 2021 and now I am very comfortable with designing and developing responsive websites
            with React. I wish to work as React developer someday and bring a valuable contribution to the team in producing impactful, 
            leading-edge applications that engage customers and deliver business results.
            </About.Text>
            <Element id='contact'/>
            <Intro.Arrow/>
        </About>
    )
}