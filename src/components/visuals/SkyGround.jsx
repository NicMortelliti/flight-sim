import React from "react";

import { Ground, Sky } from "../styles/SkyGround.styled";

const SkyGround = () => {
  const angle = 20;
  const groundPercent = 15;

  return (
    <Ground>
      <Sky angle={angle} top={groundPercent}></Sky>
    </Ground>
  );
};

export default SkyGround;
