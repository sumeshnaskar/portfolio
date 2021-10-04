import React from 'react'

import { Container, Title, Text } from './styles/intro'

export default function Intro({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Intro.Title = function IntroTitle({ children, ...restProps }){
    return <Title {...restProps}>{children}</Title>
}

Intro.Text = function IntroText({ children, ...restProps }){
    return <Text {...restProps}>{children}</Text>
}