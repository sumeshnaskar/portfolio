import React from 'react'
import { Container, Text} from './styles/about'

export default function About({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

About.Text = function AboutText({ children, ...restProps }){
    return <Text {...restProps}>{children}</Text>
}