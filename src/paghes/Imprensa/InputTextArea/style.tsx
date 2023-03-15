import styled from "styled-components";

export const TexteArea = styled.input`
  max-width: 44.875rem;
  width: 100%;
  height: 10.438rem;
  border: solid 1px white;
  background-color: transparent;
  border-radius: 16px;
  padding-top: 0;
  outline: none;
  color: rgba(255, 255, 255, 0.65);
  transition: background-color 0.3s ease;
  font-size: 16px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;
