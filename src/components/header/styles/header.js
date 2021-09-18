import styled from "styled-components"

export const Container = styled.nav`
    padding: .5em;
    margin: 0; 
    box-shadow: 0px 1px 5px #333;

    @media(min-width: 500px){
        box-shadow: 5px 0px 5px #333;
        height: 100vh;
        position: fixed;
    }
    
`
export const LogoWrapper = styled.div`
    display: inline-block;
    text-transform: uppercase;
    color: #fff;
    background: linear-gradient(45deg, #333,#333);
    padding: 0.5em;
    letter-spacing: 3px;
    user-select: none;
    font-size: 1.2rem;

    @media(min-width: 500px){
        margin: 1em 0 1em;
    }

`

export const Group = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(min-width: 500px){
        flex-direction: column;
        align-items: center;
    }
    

`
export const Text = styled.p`
    margin: 0;

`

export const Hamburger = styled.span`
    display: block;
    position: relative;
    width: 2em;
    height: 5px;
    background-color: black;
    margin-right: 1.5em;

    &:before,&:after{
        content: '';
        background-color: black;
        width: 2em;
        height: 5px;
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        
    }
    
    &:before{
        top: 8px;
    }

    &:after{
        bottom: 8px;
    }


    @media(min-width: 500px){
        display: none;
    }
`

export const List = styled.ul`
    position: absolute;
    top: 3em;
    right: 2em;
    background-color: #fff;
    margin: 0;
    list-style-type: none;
    padding: 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media(min-width: 500px){
        position: static;
        box-shadow: none;
         
    }
`
export const Item = styled.li`
    color: #333;
    text-transform: uppercase;
    padding: 1.5em;
    font-size: .8rem;
    cursor:pointer;
    text-align: right;
    border-bottom: 1px dashed;
    user-select: none;

    &:last-of-type{
        border: none;
    }

    &:hover{
        background: #333;
        color: #fff;
        font-weight: 700;
    }

    @media(min-width: 500px){
        border: 0;
        padding: 0;
        margin-top: 2em;
        text-align: left;

        &:hover{
            background: #fff;
            color: #333;
        }
    }

`