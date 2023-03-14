import styled from "styled-components";


export const CardIncrition = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
margin-top: 2.5rem;
`;

export const DivGradientText = styled.div`
    width: 24.688rem;
    height: 21.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
`;

export const DivSolidColor = styled.div`
    width: 24.5rem;
    height: 21.5rem;
    align-items: center;
    justify-content: flex-start;
`; 

export const DivContenteTextButton = styled.div`
    width: 20.688rem;
    height: 17.75rem;
    align-items: center;
    justify-content: flex-start ;
    color: white;
    position: absolute;
    margin-left: -26rem;
`

export const TextSolidColor = styled.p`
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
    margin-left: 3rem;
    
`; 
export const DivImg = styled.div`
    width: 25.063rem;
    height: 26.125rem;
    border-radius: 16px;
    z-index: 1;
`;

export const Border = styled.div`
    width: 23.5rem;
    height: 21.5rem;
    border-radius: 16px; /*1*/
    border: 2px solid transparent;
    background: linear-gradient(45deg,#47B7A3, #6D66AC) border-box;
    -webkit-mask: /*4*/
     linear-gradient(#fff 0 0) padding-box, 
     linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
     mask-composite: exclude;
     margin-right: -10px;
`


