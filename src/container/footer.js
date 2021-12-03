import React, {useState} from "react"
import { Footer,Intro } from "../components"

export function FooterContainer(){
    const [text, setText] = useState('....')
    return(
        <>
        <Intro.Text>Contact</Intro.Text>
        <Footer.Text>For any relevant job updates or collaboration, feel free to reach out to me via</Footer.Text>
        <Footer.Text style={{color: '#00cc99'}}>{text}</Footer.Text>
        <Footer>
            <Footer.Image 
                onMouseOver = {() => setText('sumeshnaskar27@gmail.com')} 
                // onMouseOut = {() => setText('....')}
                src = {process.env.PUBLIC_URL + '/images/gmail.png'}/>
            <Footer.Image src = {process.env.PUBLIC_URL + '/images/linkedin.png'}/>
            <Footer.Image 
                onMouseOver = {() => setText('github.com/sumeshnaskar')} 
                // onMouseOut = {() => setText('....')}
                src = {process.env.PUBLIC_URL + '/images/github.png'}/>
            <Footer.Image 
                href = 'https://twitter.com/sumeshnaskar'
                onMouseOver = {() => setText('@sumeshnaskar')} 
                // onMouseOut = {() => setText('....')}
                src = {process.env.PUBLIC_URL + '/images/twitter.png'}/>
            
        </Footer>
        
        </>
    )
}