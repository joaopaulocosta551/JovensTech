import styled from "styled-components";

export const Inputnumber = styled.div`
  width: 100%;
  max-width: 9.875rem;
  height: 3rem;
  border: 1px solid white;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.65);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;

export const CustInput = styled.input`
  width: 100%;
  height: 2.9rem;
  color: rgba(255, 255, 255, 0.64);
  font-size: 16px;
  background-color: transparent;
  outline: none;
  padding: 0;
  padding-left: 10px;
  box-shadow: none;
  margin: 0;
  font-family: inherit;
  border: none;
`
