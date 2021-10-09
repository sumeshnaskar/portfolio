import styled from "styled-components"

export const Container = styled.section`
    background-color: #fff;
    padding: 1em;
    min-width: 280px;
    user-select: none;

    @media(min-width: 700px){
        padding: 4em;
    }
    
`
export const Inner = styled.div`
    display: flex;
    flex-direction: column-reverse; 

    @media(min-width: 700px){
        flex-direction: row;
        
        

    }
`
export const Group = styled.div`
    width: 100%;
    padding: .5em;
    border-radius: 0 25px 0 0;
    @media(min-width: 700px){
        padding: 2em;
    }
`
export const Title = styled.h2`
    font-size: 2.5rem;
    margin: 0;
    text-align: center;
    letter-spacing: 1px;
    color: #111;

    @media(min-width: 700px){
        text-align: left;
        font-size: 3.5rem;
    }
`
export const Description = styled.p`
    font-size: 1rem;
    margin: .5em 0 .25em;
    text-align: center;
    letter-spacing: 1px;
    color: #333;

    @media(min-width: 700px){
        text-align: left;
        font-size: 1.5rem;
    }
`
export const Image = styled.img`
    max-width: 100%;
    object-fit: contain;
    object-position: bottom;
    max-height: 100vh;
    cursor: pointer;
    border: none;
    border-radius: 0 0 0 25px;
    &:hover{
        opacity: .8;
    }
    
    
`
export const Button = styled.button`
    margin: 0;
    border: 0;
    padding: .75em 1.25em;
    display: inline-block;
    font-weight: 700;
    font-size: .75rem;
    color: #111;
    cursor: pointer;
    background-color: #fff;
    margin-top: .5em;
    border: 2px solid #111;
    align-self: center;
    letter-spacing: 1px;
    border-radius: 50px;
    &: first-of-type{
        margin-right: 1em;
        
    }
    
    &:hover{
        opacity: .3;
        
    }

    @media(min-width: 700px){
        font-size: 1.25rem;

        &: first-of-type{           
            margin-right: .5em;
        }
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;

    @media(min-width: 700px){
        justify-content: flex-start;
    }
`