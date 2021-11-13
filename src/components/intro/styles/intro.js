import styled, {keyframes} from "styled-components"

export const Container = styled.section`
    margin: 0;
    top: 1em;
    min-width: 280px;
    height: 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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
        margin-top: 45vh;
    }

`

export const Text = styled.p`
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
const example = keyframes`
    0%{top:-60px;}
    100%{top: 2px;}
`

export const Arrow = styled.div`
    margin: 0 auto;
    margin-top: 3.5em;
    padding: 5px;
    transform: rotate(45deg);
    position: relative;
    animation: ${example} 1.5s infinite alternate ease-in-out;
    

    &, :before{
        content: '';
        border: solid white;
        border-width: 0 8px 8px 0;
        display: block;
        padding: 10px;
        border-image: linear-gradient(45deg, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
        -webkit-background-clip: border;
        -webkit-border-fill-color: transparent; 
        border-image-slice: 1;   
    }

`