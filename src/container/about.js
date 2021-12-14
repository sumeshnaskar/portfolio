import React from 'react'
import { Element } from 'react-scroll'
import { About, Intro } from '../components'

export function AboutContainer(){
    return (
        <About>
            <About.Text>
            Meticulous web developer with over 2 years of experience and passion for responsive 
            website design and a firm believer in the mobile-first approach. Experienced working with 
            teams to produce impactful, leading-edge websites that engage customers and deliver business results. 
            Well-versed in design standards and user preferences. 
            </About.Text>
            <Element id='contact'/>
            <Intro.Arrow/>
            {/* <Intro.Text style ={{ color: "#111"}}>Contact</Intro.Text> */}
            {/* <About.Text>sumeshnaskar27@gmail.com</About.Text> */}
        </About>
    )
}