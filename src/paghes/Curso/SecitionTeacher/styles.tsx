import styled from "styled-components";
import BoxTeacherBackground from "@/assets/imgDecoration/macbookCode.jpg";


export const BoxTeacher = styled.div`
    max-width: 47.25rem;
    width: 100%;
    height: 18rem;
    display: flex;
    flex-direction: column;
    margin-top: 4.5rem;
    background-image: url(${ BoxTeacherBackground });
    border-radius: 16px;
    background-size: contain;
    justify-content: flex-end;
    
`;

export const DivWhiteTeacher = styled.div`
    max-width: 47.25rem;
    width: 100%;
    height: 9rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    flex-direction: row;
    border-radius: 16px;
`;

export const CardIconPhoto = styled.div`
    display: 11.375rem;
    height: 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`





