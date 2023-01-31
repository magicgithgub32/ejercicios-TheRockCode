import styled from "styled-components";

export const Board = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 4px;
  grid-row-gap: 4px;
`;
