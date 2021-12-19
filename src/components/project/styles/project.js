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

const slideUp = keyframes`
    0%{ top: 50em}
    100%{ top: 0; }
`
const slideDown = keyframes`
    0%{ bottom: 50em}
    100%{ bottom: 0; }
`

const slideLeft = keyframes`
    0%{ left: 90em}
    100%{ left: 0; }
`

const slideRight = keyframes`
    0%{ right: 90em}
    100%{ right: 0; }
`

export const Inner = styled.div`
    box-shadow: rgba(0, 0, 0, 0.45) 0px 0px 20px 2px;
    display: flex;
    flex-direction: column-reverse; 
    background-image: url(${({image}) => image}), linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0));
    background-blend-mode: overlay;
    background-size: cover;
    object-fit: contain;
    object-position:  center;
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
    animation: ${slideUp} 2s forwards;
    
    @media(min-width: 700px){
        padding: 2em;
        animation: ${slideRight} 2s forwards;
    }
`
export const Title = styled.h2`
    font-size: 1.8rem;
    margin: 0;
    text-align: center;
    letter-spacing: 1px;
    color: #fff;
    font-weight: 700;
    background: linear-gradient(135deg, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 

    @media(min-width: 700px){
        text-align: left;
        font-size: 3rem;
    }
`
export const Description = styled.p`
    font-size: .8rem;
    margin: .5em .5em .25em;
    text-align: left;
    letter-spacing: 1px;
    color: #111;
    font-weight: 700;
    display: inline-block;
    background-color: #fff;
    padding: .2em .75em;
    border-radius: 3px;
    @media(min-width: 700px){
        text-align: left;
        font-size: 1rem;
    }
`

export const Note = styled(Description)`
    font-size: 1rem;
    background-color: transparent;
    color: #fff;
    padding: 0;
    margin-top: 1em;
    margin-bottom: 1em;
    letter-spacing: 1.8px;
    line-height: 1.6;
    font-weight: 400;
    @media(min-width: 700px){
        text-align: left;
        font-size: 1.2rem;
        letter-spacing: 2.25px;
    }
`

export const Image = styled.img`
    max-width: 100%;
    object-fit: scale-down;
    object-position:  0% 50%;
    background: linear-gradient(270deg, rgba(0,0,0,.75) ,rgba(0,0,0,.75));
    border: none;
    border-radius: 0 0 0 25px;
    transition: transform .5s;
    position: relative;
    overflow: hidden;
    animation: ${slideDown} 2s forwards;

    @media(min-width: 700px){
        animation: ${slideLeft} 2s forwards;
        
    }
`
export const Button = styled.a`
    margin: 0;
    border: 0;
    padding: .5em 1em;
    display: inline-block;
    font-weight: 700;
    font-size: .75rem;
    color: #fff;
    cursor: pointer;
    background-color: red;
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