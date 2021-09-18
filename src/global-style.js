import { createGlobalStyle } from 'styled-components'

//global styles 
export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
    }

    html, body{
        font-family: 'Roboto', sans-serif;
        margin: 0;
        font-size: 16px;
        height: 100vh;
    }
`