import styled, {keyframes} from "styled-components"

export const Container = styled.section`
    background: linear-gradient(#111, #fff);
    padding: 1em;
    min-width: 280px;
    user-select: none;
    display: flex;
    flex-direction: column;
    @media(min-width: 700px){
        padding: 4em;
        padding-bottom: 0;
        padding-top: 0;
    }
    
`

const slide = keyframes`
    0%{ left: 25em}
    100%{ left: 0; }
`

export const Inner = styled.div`

    box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 20px 2px;
    display: flex;
    flex-direction: column-reverse; 
    background-image: url(${({image}) => image}), linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0));
    background-blend-mode: overlay;
    background-size: cover;
    border-radius: 0 25px 0 25px;
    position: relative;
    overflow: hidden;
    left: 0;
    right: 0;
    border: 5px solid #fff;
    @media(min-width: 700px){
        flex-direction: row;
    }

`
export const Group = styled.div`
    width: 100%;
    padding: .5em;
    border-radius: 0 25px 0 0;
    background: linear-gradient(225deg, rgba(0,0,0,1) ,rgba(0,0,0,.75));
    position: relative;
    overflow: hidden;
    animation: ${slide} .8s forwards;
    @media(min-width: 700px){
        padding: 2em;
    }
`
export const Title = styled.h2`
    font-size: 1.8rem;
    margin: 0;
    text-align: center;
    letter-spacing: 1px;
    color: #fff;
    font-weight: 700;

    @media(min-width: 700px){
        text-align: left;
        font-size: 3rem;
    }
`
export const Description = styled.p`
    font-size: 1rem;
    margin: .5em 0 .25em;
    text-align: center;
    letter-spacing: 1px;
    color: #fff;
    font-weight: 700;

    @media(min-width: 700px){
        text-align: left;
        font-size: 1.5rem;
    }
`

export const Image = styled.img`
    max-width: 100%;
    object-fit: cover;
    object-position:  top;
    background: linear-gradient(45deg, rgba(255,255,255,.004), rgba(255,255,255,.1));
    cursor: pointer;
    border: none;
    border-radius: 0 0 0 25px;
    transition: transform .5s;
    position: relative;
    overflow: hidden;
    animation: ${slide} .8s forwards;

    @media(min-width: 700px){
        width: 400px;
        
    }
    &:hover{
        transform: scale(1.1);
    }
    
    
`
export const Button = styled.a`
    margin: 0;
    border: 0;
    padding: .75em 1.25em;
    display: inline-block;
    font-weight: 700;
    font-size: .75rem;
    color: #111;
    cursor: pointer;
    background-color: #fff;
    margin: .5em 0;
    align-self: center;
    letter-spacing: 1px;
    border-radius: 50px;
    text-decoration: none;
    
    &: last-of-type{
        margin-left: .5em;
        
    }
    
    &:hover{
        opacity: .3;
        
    }

    @media(min-width: 700px){
        font-size: 1.25rem;
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    @media(min-width: 700px){
        justify-content: flex-start;
    }
`