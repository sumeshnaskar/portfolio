import React from 'react'
import { Link } from 'react-scroll'

import { Header } from '../components'

export function HeaderContainer(){
    return (
        <Header>   
            <Header.Group>
                <Header.Logo>
                    <Link  
                        duration = {10} 
                        to = "top" 
                        spy = {true} 
                        smooth = {true}
                    >
                        Portfolio
                    </Link>
                </Header.Logo>
                <Header.Hamburger/>
                <Header.List>
                        <Header.Item>
                            <Link  
                                duration = {10} 
                                to = "project" 
                                spy = {true} 
                                smooth = {true}
                            >
                                Project
                            </Link>
                        </Header.Item>
                        <Header.Item>
                            <Link  
                            duration = {10} 
                            to = "about" 
                            spy = {true} 
                            smooth = {true}
                            >
                                About
                            </Link>
                        </Header.Item>
                        <Header.Item>
                            <Link  
                                duration = {10} 
                                to = "contact" 
                                spy = {true} 
                                smooth = {true}
                            >
                                Contact
                            </Link>
                        </Header.Item>       
                    </Header.List> 
                </Header.Group>       
                <Header.Text>Made using React</Header.Text>     
        </Header>       
    )
}