import styled from "styled-components";

export const BorderForm = styled.div`
    width: 51.875rem;
    height: 28.938rem;
    border-radius: 16px; /*1*/
    border: 2px solid transparent;
    background: linear-gradient(45deg,#47B7A3, #6D66AC) border-box;
    -webkit-mask: /*4*/
     linear-gradient(#fff 0 0) padding-box, 
     linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
     mask-composite: exclude;
`;