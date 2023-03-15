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
     margin-top: 1.5rem;
     margin-bottom: 3.5rem;
     position:relative;
`;

export const ContentForms = styled.div`
   max-width: 44.875rem;
   width: 100%;
   height: 28.938rem;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
   margin-top:  2050px;
   position: absolute;
`


export const DivRowInputs = styled.div`
   height: 4.25rem;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   gap: 1.5rem;
   /* MARGIN BOTTOM TEMPORARIA PARA TESTAR OS CONMPOTNES */
   margin-bottom: 1.5rem;
   margin-top: 1.5rem;
   `;