import axios from "axios";
import { useEffect, useState } from "react";
// import { IoTriangle } from "react-icons/io5";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { API_URL } from "../config";

const convertLevelToSeverity = (level) => {
  if (level < 25) {
    return "CLEAR";
  } else if (level >= 25 && level < 50) {
    return "MILD";
  } else if (level >= 50 && level < 75) {
    return "MODERATE";
  } else {
    return "SEVERE";
  }
};

const Hematuria = () => {
  const [percent, setPercent] = useState(0);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get(`${API_URL}/system`) // API endpoint
        .then((response) => setPercent(response.data.hematuria_percent)) // response key
        .catch((error) => console.error(error));
    }, 1000); // fetch every 1 second

    return () => clearInterval(intervalId); // clean up on component unmount
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get(`${API_URL}/system`) // API endpoint
        .then((response) => setLevel(response.data.hematuria_level)) // response key
        .catch((error) => console.error(error));
    }, 1000); // fetch every 1 second

    return () => clearInterval(intervalId); // clean up on component unmount
  }, []);

  let severity = convertLevelToSeverity(level); // changes value to "CLEAR", "MILD", "MODERATE", or "SEVERE"

  return (
    <div className="max-w-[900px] w-full px-4 pb-4">
      <div
        className="w-full h-[162px] bg-slate-900 rounded-2xl 
                       flex flex-col justify-between items-center px-5 py-4"
      >
        <div className="w-full flex justify-between">
          <div className="text-2xl md:text-3xl text-slate-200">
            HEMATURIA SEVERITY
          </div>
          <div className="text-2xl md:text-3xl text-slate-200 hidden md:block">
            {Math.min(Math.max(percent, 0), 100).toFixed(1)}% BLOOD
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div
            className={`font-bold bg-slate-200 flex rounded-xl justify-left items-center text-slate-950 text-[26px] md:text-3xl px-2 md:px-3 py-1 md:py-2`}
          >
            {severity}
          </div>
          <div className="text-2xl md:text-3xl text-slate-200 md:hidden">
            {Math.min(Math.max(percent, 0), 100).toFixed(1)}% BLOOD
          </div>
          <div className="hidden md:flex w-[75%] h-24 flex-col justify-center items-center relative">
            <div className="w-full h-8 rounded-2xl text-slate-200 flex flex-row">
              <div
                className="w-[45%] h-full bg-gradient-to-r from-[#ddc588] from-50% to-70% to-[#cf8f70] text-xl 
                            relative flex flex-row justify-between items-center rounded-l-2xl pl-12 pr-5"
              >
                <p className="relative -bottom-8">CLEAR</p>
                <p className="relative -bottom-8">MILD</p>
              </div>
              <div className="w-[10%] h-full bg-gradient-to-r from-[#cf8f70] to-[#a8372a] text-xl relative flex justify-center items-center"></div>
              <div
                className="w-[45%] h-full bg-gradient-to-r from-[#a8372a] from-30% to-50% to-[#491210] text-xl 
                          relative flex flex-row justify-between items-center rounded-r-2xl pr-9"
              >
                <p className="relative -bottom-8">MODERATE</p>
                <p className="relative -bottom-8">SEVERE</p>
              </div>
            </div>

            <div
              className="w-10 h-5/6 absolute transition-all duration-500 -translate-x-1/2 flex flex-col justify-between items-center"
              style={{ left: `${Math.min(level, 100)}%` }}
            >
              <TbTriangleInvertedFilled className="text-4xl text-slate-200" />
            </div>
          </div>
        </div>
        <div className="md:hidden w-full h-6 flex-col justify-center items-center relative mt-2">
          <div className="w-full h-6 rounded-2xl text-slate-200 flex flex-row">
            <div
              className="w-[45%] h-full bg-gradient-to-r from-[#ddc588] from-50% to-70% to-[#cf8f70] text-md 
                            relative flex flex-row justify-between items-center rounded-l-2xl"
            ></div>
            <div className="w-[10%] h-full bg-gradient-to-r from-[#cf8f70] to-[#a8372a] text-xl relative flex justify-center items-center"></div>
            <div
              className="w-[45%] h-full bg-gradient-to-r from-[#a8372a] from-30% to-50% to-[#491210] text-md
                          relative flex flex-row justify-between items-center rounded-r-2xl"
            ></div>
          </div>
          <div
            className="w-10 h-[28px] absolute transition-all duration-500 -translate-x-1/2 flex flex-col justify-between items-center"
            style={{ left: `${Math.min(level, 100)}%`, top: "-16px" }}
          >
            <TbTriangleInvertedFilled className="text-4xl text-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hematuria;
