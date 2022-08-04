import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, auto);
  overflow-y: auto;
`;

export const ColumnHeader = styled.div`
  width: 150px;
  min-width: 150px;
  max-width: 400px;
`;

export const Cell = styled.div`
  background-color: white;
`;

export const HeaderCell = styled.div`
  background-color: white;
  width: 160px;
`;

export const Row = styled.div`
  display: contents;
  & > ${Cell}:first-of-type, & > ${HeaderCell}:first-of-type {
    position: sticky;
    left: 0;
    z-index: 2;
  }
`;
