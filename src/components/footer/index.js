import React from 'react'
import { Container, Text, Image, Title } from './styles/footer'

export default function Footer({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Footer.Title = function FooterTitle({ children, ...restProps }){
    return <Title {...restProps}>{children}</Title>
}

Footer.Text = function FooterText({ children, ...restProps }){
    return <Text {...restProps}>{children}</Text>
}

Footer.Image = function FooterImage({ ...restProps }){
    return <Image {...restProps}/>
}

