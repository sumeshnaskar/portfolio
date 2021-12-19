import React from 'react'
import { Container, Circle } from './styles/loading'

export default function Loading({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Loading.Circle = function LoadingCircle({ children, ...restProps }){
    return <Circle {...restProps}>{children}</Circle>
}