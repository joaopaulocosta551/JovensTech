import styled from "styled-components";

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8.8rem;
    height: 3rem;
    color: white;
    font-size: 16px;
    border-radius: 0.5rem;
    font-size: 16px;
    gap: 0.5rem;
    border: 1px solid transparent;
    transition: background-color 0.3s ease;

    &:hover{
        background-color: rgba(255, 255, 255, 0.1);
        border: 1px solid transparent;
        cursor: pointer;
    }
`;
