import styled from "styled-components"

export const Container = styled.section`
    margin: 0;
    border: 1px solid #333;
    top: 1em;
    
`
export const Title = styled.h1`
    margin: 0 auto;
    margin-top: 4em;
    font-size: 4rem;
    width: 60%;
    color: #fff;
    text-align: center;
    border-image: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
        -webkit-background-clip: border;
        -webkit-border-fill-color: transparent; 
        border-image-slice: 1;
    border-bottom: 5px solid;
     

    @media(min-width: 700px){
        background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;  
    }

`
export const Text = styled.p`
    color: #fff;
    margin: 0 auto;
    text-align: center;
    margin-top: 1em;
    background: linear-gradient(45deg, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
    padding: .5em 1em;
    width: 280px;
    color: #fff;
    font-weight: 700;
`