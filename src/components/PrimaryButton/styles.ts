import styled from "styled-components";


export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 10.938rem;
    width: 100%;
    height: 3rem;
    background-color: #A3FFBF;
    color: black;
    border-radius: 0.5rem;
    font-size: 16px;
    margin-top: 3rem;
    font-weight: 700;
    
    transition: background-color 0.3s ease;

    &:hover{
    
        background-color: #a3ffbfa1;
        cursor: pointer;
    }

 `;