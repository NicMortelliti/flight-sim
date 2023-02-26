import React from "react";

import { SGCont, Ground, Sky } from "../styles/SkyGround.styled";

const SkyGround = () => {
  const angle = 0;
  const groundPercent = 30;

  return (
    <SGCont>
      <Ground>
        <Sky angle={angle} top={100 - groundPercent}></Sky>
      </Ground>
    </SGCont>
  );
};

export default SkyGround;
