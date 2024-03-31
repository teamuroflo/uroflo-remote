import Hematuria from "./components/Hematuria";
import SupplyVolume from "./components/SupplyVolume";
import WasteVolume from "./components/WasteVolume";
import SupplyRate from "./components/SupplyRate";
import WasteRate from "./components/WasteRate";
import PatientInfo from "./components/PatientInfo";
import UroFloLogo from "./assets/uroflo_blue_name_cropped.svg";

function App() {
  return (
    <div className="w-screen h-full md:h-screen bg-slate-900 flex flex-col justify-start items-center">
      <div className="max-w-[900px] w-full flex justify-start items-center p-4">
        <img src={UroFloLogo} alt="uroflo" className="w-60" />
      </div>
      <PatientInfo />
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
