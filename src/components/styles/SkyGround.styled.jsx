import styled from "styled-components";

const sky = "blue";
const ground = "brown";

export const SkyGround = styled.div`
  min-height: 300vh;
  min-height: 300dvh;
  min-width: 300vw;
  min-width: 300dvw;
  background: linear-gradient(0deg, ${ground} 50%, ${sky} 50%);
  background-position: center;
`;
