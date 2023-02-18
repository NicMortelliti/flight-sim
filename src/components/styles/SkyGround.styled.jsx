import styled from "styled-components";

const sky = "blue";
const ground = "saddlebrown";

export const Sky = styled.div`
  min-height: 200vh;
  min-height: 200dvh;
  min-width: 200vw;
  min-width: 200dvw;
  background: ${sky};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: ${({ top }) => `${top}%`};
  transform: ${({ angle }) => `rotate(${angle}deg)`};
`;

export const Ground = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  min-width: 100vw;
  min-width: 100dvw;
  background: ${ground};
`;
