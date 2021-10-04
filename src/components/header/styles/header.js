import styled from "styled-components"


//Header container fixed on top
export const Container = styled.nav`
    padding: 1em;
    margin: 0; 
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    margin: 0 auto;
    background-color: rgba(51, 51, 51, .9);
    
    @media(min-width: 700px){
        width: 90%;
    }
`

//Logo 
export const LogoWrapper = styled.div`  
    text-transform: uppercase;
    color: #333;
    background: #fff;
    padding: 0.5em;
    letter-spacing: 5px;
    user-select: none;
    font-size: 1.2rem;
    font-weight: 700;
    
    @media(min-width: 500px){
        margin-right: 1em;

    }
`

//Group 
export const Group = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(min-width: 500px){
        align-items: flex-end;
        justify-content: space-between;
    }
`

//Text
export const Text = styled.p`
    margin: 0;
    padding: .5em 0;
    font-size: .85rem;
    letter-spacing: 1.25px;
    color: #fff;
    user-select: none;
`

export const Wrapper = styled.div`
    padding: 8px 0;
    cursor: pointer;
`
//hamburger menu
export const Hamburger = styled.span`
    display: block;
    position: relative;
    width: 2em;
    height: 5px;
    background-color: #fff; 

    &:before,&:after{
        content: '';
        background-color: #fff;
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

//unordered list
export const List = styled.ul`
    position: absolute;
    top: 3em;
    right: 1em;
    background-color: #fff;
    margin: 0;
    list-style-type: none;
    padding: 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media(min-width: 500px){
        position: static;
        box-shadow: none;
        display: flex;
        background-color: rgba(51, 51, 51, 0);
    }
`

//list items
export const Item = styled.li`
    color: #333;
    text-transform: uppercase;
    padding: 1.5em;
    font-size: .8rem;
    cursor: pointer;
    text-align: left;
    border-bottom: 1px dashed;
    user-select: none;
    display: ${({ display}) => display};
    letter-spacing: 5px;

    &:last-of-type{
        border: none;
    }

    &:hover{
        background-color: rgba(51, 51, 51, 1);
        color: #fff;
        font-weight: 700;
    }

    @media(min-width: 500px){
        border: 0;
        padding: 0;
        text-align: center;
        margin-right: 2em;
        background-color: rgba(51, 51, 51, 0);
        font-weight: 400;
        padding: 0em 1em;
        border-radius: 5px;
        color: #fff;
        letter-spacing: 3px;
        display: block;
        &:last-of-type{
            margin-right: 0;
        }

        &:hover{
            font-weight: 400;
            transform: scale(1.1,1.1);   
            background-color: rgba(51, 51, 51, 0);  
        }
    }

`