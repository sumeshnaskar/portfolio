import React from 'react'
import { 
    Container, 
    Image, 
    Title, 
    Description, 
    Button, 
    Group, 
    Inner, 
    Wrapper, 
    Note, 
    ButtonExt 
} from './styles/project'

export default function Project({ children, ...restProps }){
    return <Container {...restProps}>{children}</Container>
}

Project.Inner = function ProjectInner({ children, ...restProps }){
    return <Inner {...restProps}>{children}</Inner>
}

Project.Image = function ProjectImage({ ...restProps }){
    return <Image {...restProps}/>
}

Project.Title = function ProjectTitle({ children, ...restProps }){
    return <Title {...restProps}>{children}</Title>
}

Project.Description = function ProjectDescription({ children, ...restProps }){
    return <Description {...restProps}>{children}</Description>
}

Project.Note = function ProjectNote({ children, ...restProps }){
    return <Note {...restProps}>{children}</Note>
}

Project.Button = function ProjectButton({ children, ...restProps }){
    return <Button {...restProps}>{children}</Button>
}

Project.ButtonExt = function ProjectButtonExt({ children, ...restProps }){
    return <ButtonExt {...restProps}>{children}</ButtonExt>
}

Project.Group = function ProjectGroup({ children, ...restProps }){
    return <Group {...restProps}>{children}</Group>
}

Project.Wrapper = function ProjectWrapper({ children, ...restProps }){
    return <Wrapper {...restProps}>{children}</Wrapper>
}