import React, { createContext, useContext, useState } from 'react'

import {
    Container,
    LogoWrapper,
    Group,
    Text,
    Hamburger,
    List,
    Item,
    Wrapper

} from './styles/header'

const HeaderContext = createContext()

//header
export default function Header({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

//logo 
Header.Logo = function HeaderLogo({ children, ...restProps }){
    return <LogoWrapper {...restProps}>{children}</LogoWrapper>
}

//Group - grouping of different compound components
Header.Group = function HeaderGroup({ children, ...restProps }){
    const [ display, setDisplay ] = useState(false)
    return (
        <HeaderContext.Provider value={{ display, setDisplay }}>
            <Group {...restProps}>{children}</Group>
        </HeaderContext.Provider>
    )
}  

//Text - navigation text
Header.Text = function HeaderText({ children, ...restProps }){
    return <Text {...restProps}>{children}</Text>
}

//Hambuger menu
Header.Hamburger = function HeaderHamburger({ ...restProps }){
    const { display, setDisplay } = useContext(HeaderContext)
    return <Wrapper onClick = {()=>setDisplay(!display)}><Hamburger {...restProps}/></Wrapper>
}

//Navigation list
Header.List = function HeaderList({ children, ...restProps }){
    
    return <List {...restProps}>{children}</List>
}

//Navigation item
Header.Item = function HeaderItem({ children, ...restProps }){
    const { display } = useContext(HeaderContext)
    return (
        display  
        ? <Item display='block' {...restProps}>{children}</Item> 
        : <Item display='none' {...restProps}>{children}</Item> 
    )
}