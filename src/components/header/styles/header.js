import styled from "styled-components"


//Header container fixed on top
export const Container = styled.nav`
    padding: 1em;
    margin: 0; 
    position: fixed;
    z-index: 999;
    left: 0;
    right: 0;
    width: 100%;
    margin: 0 auto;
    background-color: rgba(17, 17, 17, .9);
    
    @media(min-width: 700px){
        width: 95%;
        padding: 1em 4em; 
        
    }
`

//Logo 
export const LogoWrapper = styled.div`  
    text-transform: uppercase;

    padding: 0.5em;
    letter-spacing: 5px;
    user-select: none;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    transition: transform .2s;
    background: linear-gradient(90deg, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    
    @media(min-width: 500px){
        margin-right: 1em;
    }

    &:hover{
        transform: scale(1.25);
    }
`

//Grouping of logo and menu items 
export const Group = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(min-width: 500px){
        align-items: flex-end;
        justify-content: space-between;
    }
`

//Text below logo
export const Text = styled.p`
    margin: 0;
    padding: 0;
    font-size: .85rem;
    letter-spacing: 3.9px;
    color: #fff;
    opacity: .3;
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
    transition: transform scale(1);

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
    top: 5em;
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

//list items in the menu
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
    background-color: rgba(51, 51, 51, 0);
    &:last-of-type{
        border: none;
    }
    &:first-of-type{
        margin-top: 2em;
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
        margin-top: 2em;
        padding: 0em 1em;
        border-radius: 5px;
        color: #fff;
        letter-spacing: 3px;
        display: block;
        font-weight: 700;
        transition: transform .2s;
        
        &:last-of-type{
            margin-right: 0;
            padding-right: 0;
        }

        &:hover{ 
            background: linear-gradient(90deg, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent; 
            font-weight: 700;
            transform: scale(1.5);
        }
    }

`