import styled from "styled-components";

export const Container = styled.footer`
    background: #111;
    padding: 2em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: -.1em;
    padding-top: .5em;
`

export const Title = styled.p`
    margin: 0 auto;
    text-align: center;
    margin-top: 0;
    padding: .5em 1em;
    color: #fff;
    font-weight: 700;
    font-size: 1.35rem;
    letter-spacing: 5px;

    @media(min-width: 700px){
        font-size: 1.8rem;
        letter-spacing: 8px;
    }
`

export const Text = styled.p`
    margin: 0;
    color: rgba(255, 255, 255, .5);
    margin-top: 0;
    text-align: center;
    padding: 0 1em;
    
`

export const Image = styled.img`
    height: 30px;
    width: 30px;
    margin: .5em;
    cursor: pointer;
    transition: transform .2s;
    &:hover{
        transform: scale(1.4);
    }
`