import styled from "styled-components";

export const GridGallery = styled.div<{direction:boolean}>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem;
  max-width: 56rem;
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  direction: ${props => props.direction ? 'ltr' : 'rtl'};
`;

export const DivBigImg = styled.div`
  grid-column-start: 1;
  grid-column-end: span 2;
  grid-row-start: 1;
  grid-row-end: span 2;
  max-width: 56rem;
  border-radius: 16px;
`;
export const DivSmallImg1 = styled.div`
  border-radius: 16px;
`;

export const DivSmallImg2 = styled.div`
  border-radius: 16px;
`;
