import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    html, body {
        margin: 0;
        padding: 0; 
        width: 100%;
        max-height: 100%;
        max-width: 100%;
        overflow-x: hidden;
        color: black;
        background-color: white;
        overscroll-behavior: none
    }
`