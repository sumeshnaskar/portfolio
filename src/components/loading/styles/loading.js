import styled, {keyframes} from "styled-components"

export const Container = styled.section`
    background: #111;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const loading = keyframes`
    0%{ transform: scale(.5, .5);}
    50%{ transform: scale(1, 1);}
    100%{ transform: scale(.5, .5);}
`

export const Circle = styled.p`
    margin: 0;
    paadding: 0px
    color: white;
    border: 5px solid rgba(255,255,255,.4);
    width: 75px;
    height: 75px;
    margin: 0 auto;
    border-radius: 50px;
    outline: rgba(255,255,255,.1) solid 20px;
    animation: ${loading} 1.5s infinite cubic-bezier(.1, .11, .89, .32);
`