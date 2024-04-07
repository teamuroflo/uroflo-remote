import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

const WasteRate = () => {
  const [rate, setRate] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get(`${API_URL}/system`) // replace with your API endpoint
        .then((response) => setRate(response.data.waste_rate)) // replace 'rate' with the actual key in the response
        .catch((error) => console.error(error));
    }, 1000); // fetch every 1 second

    return () => clearInterval(intervalId); // clean up on component unmount
  }, []);

  return (
    <div className="max-w-[900px] w-full h-full px-4 md:pl-0 pb-4">
      <div
        className="w-full h-full bg-slate-900 rounded-2xl 
                       flex flex-row "
      >
        <div className="w-full h-[162px] flex flex-col justify-between items-start px-5 py-4">
          <div className="text-2xl md:text-3xl text-slate-200">
            WASTE OUTFLOW
          </div>
          <div className="w-full flex flex-col justify-center items-center mb-20">
            <div className="font-bold text-slate-200 text-[26px] md:text-3xl mb-[9px]">
              {rate} mL/min
            </div>
            <div className="w-full h-6 rounded-2xl bg-slate-200">
              <div
                className="h-full bg-yellow-500 rounded-2xl transition-all duration-500"
                style={{ width: `${Math.min((rate / 200) * 100, 100)}%` }}
              ></div>
              <div className="flex flex-row justify-between items-center">
                <div className="text-xl text-slate-200">0</div>
                <div className="text-xl text-slate-200">200</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteRate;
