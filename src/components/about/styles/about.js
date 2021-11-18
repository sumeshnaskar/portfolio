import styled from "styled-components"

export const Container = styled.section`
    margin: 0;
    background: #fff;
    border: 0;
    outline: 0;
    margin-top: -.1em;
    min-width: 280px;

`
export const Text = styled.p`
    color: #111;
    padding: 1.25em;
    text-align: justify;
    max-width: 96%;
    margin: 0 auto;
    padding-top: 0;
    letter-spacing: 1.6px;
    line-height: 1.6;

    @media(min-width: 700px){
        max-width: 80%;
        margin: 0 auto;
        font-size: 1.25rem;
    }
`