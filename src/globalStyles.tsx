import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        box-sizing: border-box; 
        background-color: #030932;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        color: white;
    }

    #root{
        display: flex;
        width: 100vw;
        flex-direction: column;
       
    }

    main{
        width: 100%;
        background: url(/hero-bg.svg) ;
        background-size: 100%;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`;
