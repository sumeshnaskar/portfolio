import styled from "styled-components"

export const Container = styled.section`
    margin: 0;
    border: 1px solid #333;
    top: 1em;
    min-width: 280px;
    
`
export const Title = styled.h1`
    margin: 0 auto;
    margin-top: 25vh;
    font-size: 4rem;
    width: 90%;
    color: #fff;
    text-align: center;
    border-bottom: 5px solid;
    border-image: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
        -webkit-background-clip: border;
        -webkit-border-fill-color: transparent; 
        border-image-slice: 1;
    
    background: linear-gradient(135deg, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 

    @media(min-width: 700px){
        width: 80%;
        font-size: 4rem;
        margin-top: 45vh;
    }

`
export const Text = styled.p`
    color: #fff;
    margin: 0 auto;
    text-align: center;
    margin-top: 0;
    padding: .5em 1em;
    color: #fff;
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: 5px;

    @media(min-width: 700px){
        font-size: 1.8rem;
        letter-spacing: 8px;
    }
`