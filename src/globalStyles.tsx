import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

   
    body{
        margin: 0;
        padding: 0;
        width: 100vw;
        box-sizing: border-box; 
        background-color: #030932;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        color: white;
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6, p{
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
    }

    #root{
        display: flex;
        width: 100vw;
        flex-direction: column;
    }

`;
