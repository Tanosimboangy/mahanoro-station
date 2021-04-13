import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Rubik', sans-serif;
        font-style: normal;
        font-weight: normal;
        margin: 0;
        padding: 0;
        button {
            cursor: pointer;
            outline: none;
        }
        a {
            text-decoration: none;
        }

        span {
            display: block;
        }
        h1, h2, h3, h4, h5, h6, p {
            margin: 0;
        }
    }`
