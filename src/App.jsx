import { useState } from "react";
import Hematuria from "./components/Hematuria";
import SupplyVolume from "./components/SupplyVolume";
import WasteVolume from "./components/WasteVolume";
import SupplyRate from "./components/SupplyRate";
import WasteRate from "./components/WasteRate";

function App() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Hematuria />
      <div className="max-w-[900px] w-full flex flex-col md:flex-row justify-center items-center">
        <SupplyVolume />
        <WasteVolume />
      </div>
      <div className="max-w-[900px] w-full flex flex-col md:flex-row justify-center items-center">
        <SupplyRate />
        <WasteRate />
      </div>
    </div>
  );
}

export default App;
