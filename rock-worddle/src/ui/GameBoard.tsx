import styled from "styled-components";

export const Board = styled.section`
  display: grid;
  grid-column-gap: 4px;
  grid-row-gap: 4px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  margin: 1rem auto;
  width: fit-content;
`;

export const getCellColor = (
  isActive: boolean,
  isGreen: boolean,
  isYellow: boolean
) => {
  if (isActive) return "white";
  if (isGreen) return "green";
  if (isYellow) return "yellow";

  return "lightgray";
};

export const BoardCell = styled.div<{
  isActive: boolean;
  isGreen: boolean;
  isYellow: boolean;
}>`
  align-items: center;
  border-radius: 4px;
  border: 2px solid rgb(144, 202, 249);
  display: flex;
  height: 62px;
  justify-content: center;
  width: 62px;
  background-color: ${(props) =>
    getCellColor(props.isActive, props.isGreen, props.isYellow)};
`;
