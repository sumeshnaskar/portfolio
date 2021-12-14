import styled, {keyframes} from "styled-components"

export const Container = styled.section`
    background: #111;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const loading = keyframes`
    0%{ transform: scale(.5, .5); outline: rgba(255,255,255,.01) solid 20px;}
    50%{ transform: scale(1, 1); outline: rgba(255,255,255,.05) solid 20px;}
    100%{ transform: scale(.5, .5); outline: rgba(255,255,255,.1) solid 20px;}
`

export const Circle = styled.p`
    margin: 0;
    padding: 0px
    color: white;
    border: 5px solid rgba(255,255,255,1);
    width: 75px;
    height: 75px;
    margin: 0 auto;
    -webkit-border-radius: 50px;
    outline: rgba(255,255,255,.09) solid 20px;
    animation: ${loading} 1s infinite cubic-bezier(.1, .11, .89, .32);
`