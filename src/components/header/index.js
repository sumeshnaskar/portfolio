import React from 'react'

import {
    Container,
    LogoWrapper,
    Group,
    Text,
    Hamburger,
    List,
    Item

} from './styles/header'

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
    return <Group {...restProps}>{children}</Group>
}  

//Text - navigation text
Header.Text = function HeaderText({ children, ...restProps }){
    return <Text {...restProps}>{children}</Text>
}

//Hambuger menu
Header.Hamburger = function HeaderHamburger({ ...restProps }){
    return <Hamburger {...restProps}/>
}

//Navigation list
Header.List = function HeaderList({ children, ...restProps }){
    return <List {...restProps}>{children}</List>
}

//Navigation item
Header.Item = function HeaderItem({ children, ...restProps }){
    return <Item {...restProps}>{children}</Item>
}