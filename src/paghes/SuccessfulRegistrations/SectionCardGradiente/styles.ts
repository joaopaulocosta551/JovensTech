import styled from "styled-components";
import BoxTeacherBackground from "@/assets/imgDecoration/macbookCode.jpg";


export const BoxTeacher = styled.div`
    max-width: 55rem;
    width: 100%;
    height: 30.063rem;
    display: flex;
    flex-direction: column;
    margin-top: 4.5rem;
    background-image: url(${ BoxTeacherBackground });
    border-radius: 16px;
    background-size: contain;
    justify-content: flex-end;
    margin-bottom: 6.438rem;
    
`;

export const DivWhiteTeacher = styled.div`
    max-width: 55rem;
    width: 100%;
    height: 20.063rem;
    background: linear-gradient(44.42deg, rgba(198, 44, 80, 0.9) -12.5%, rgba(139, 31, 109, 0.9) 50.12%, rgba(73, 64, 157, 0.9) 108.75%), #000000;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    border-radius: 16px;
`;

export const DivTextContent = styled.div`
    max-width: 52rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
`

export const TextIcon = styled.div`
    display: flex;
    flex-direction: column;
`






