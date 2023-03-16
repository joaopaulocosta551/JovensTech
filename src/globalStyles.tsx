import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    /* input:-internal-autofill-selected {
        appearance: menulist-button;
        background-image: none !important;
        background-color: -internal-light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4)) !important;
        color: -internal-light-dark(black, white) !important;
    } */

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active{
        transition: background-color 9999s ease-in-out 0s;
        color: white !important;
    }
   
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
