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
                            <Header.Item>About</Header.Item>
                            <Header.Item>Contact</Header.Item>       
                        </Header.List> 
                    </Header.Group>       
                    <Header.Text>Made using React</Header.Text>     
            </Header>       
        </>
        
    )
}