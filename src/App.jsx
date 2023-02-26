import React from "react";
import { useDispatch, useSelector } from "react-redux";

import GlobalStyles from "./components/styles/Global";
import { SkyGround } from "./components/visuals";

function App() {
  return (
    <>
      <GlobalStyles />
      <SkyGround />
    </>
  );
}

export default App;
