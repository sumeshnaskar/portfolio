import React from "react"
import { Footer } from "../components"

export function FooterContainer(){
    return(
        <>
        <Footer>
            {/* <Footer.Text>contact me here</Footer.Text> */}
            <Footer.Image src = {process.env.PUBLIC_URL + '/images/gmail.png'}/>
            <Footer.Image src = {process.env.PUBLIC_URL + '/images/linkedin.png'}/>
            <Footer.Image src = {process.env.PUBLIC_URL + '/images/github.png'}/>
            <Footer.Image src = {process.env.PUBLIC_URL + '/images/twitter.png'}/>
        </Footer>
        </>
    )
}