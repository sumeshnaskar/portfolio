import React from 'react'

import { Header } from '../components'

export function HeaderContainer(){
    return (
        <>
        <Header>
            
            <Header.Group>
                <Header.Logo>Sumesh</Header.Logo>
                <Header.Hamburger />
                <Header.List>
                        <Header.Item>Project</Header.Item>
                        <Header.Item>Contact</Header.Item>
                        <Header.Item>About</Header.Item>
                        <Header.Item>Thoughts</Header.Item>
                        <Header.Item>Journey</Header.Item>
                        <Header.Item>Experience</Header.Item>
                    </Header.List> 
                </Header.Group>
               
                       
                    </Header>         
            </>
        
    )
}