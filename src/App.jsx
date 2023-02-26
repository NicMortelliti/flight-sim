import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { GlobalStyles, GlobalWrapper } from "./components/styles/Global";
import { SkyGround } from "./components/visuals";
import { Dial as IasDial } from "./components/ui/symbology/airspeed/index";

function App() {
  return (
    <>
      <GlobalStyles />
      <GlobalWrapper>
        <SkyGround className="sg" />
        {/* <IasDial /> */}
      </GlobalWrapper>
    </>
  );
}

export default App;
