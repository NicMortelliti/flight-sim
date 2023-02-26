import styled from "styled-components";

const sky = "blue";
const ground = "saddlebrown";
const simSize = 70;

export const Sky = styled.div`
  background: ${sky};
  display: flex;
  height: ${({ top }) => `${top}%`};
  transform: ${({ angle }) => `rotate(${angle}deg)`};
`;

export const Ground = styled.div`
  height: 100%;
  width: 100%;
  background: ${ground};
`;

export const SGCont = styled.div`
  height: ${simSize}vh;
  width: ${simSize}vh; // Set to vh so we can maintain a square shape
`;
