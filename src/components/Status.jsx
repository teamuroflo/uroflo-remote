import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

const getStatusColor = (statusLevel) => {
  if (statusLevel === "NORMAL") {
    return "bg-green-500";
  } else if (statusLevel === "CAUTION") {
    return "bg-yellow-500";
  } else if (statusLevel === "CRITICAL") {
    return "bg-red-500";
  } else {
    return "bg-yellow-500";
  }
};

const Status = () => {
  const [statusLevel, setStatusLevel] = useState("RESET");
  const [statusMessage, setStatusMessage] = useState(
    "System must be reset with new patient."
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get(`${API_URL}/system`) // replace with your API endpoint
        .then((response) => setStatusLevel(response.data.status_level)) // replace 'rate' with the actual key in the response
        .catch((error) => console.error(error));
    }, 1000); // fetch every 1 second

    return () => clearInterval(intervalId); // clean up on component unmount
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get(`${API_URL}/system`) // replace with your API endpoint
        .then((response) => setStatusMessage(response.data.status_message)) // replace 'rate' with the actual key in the response
        .catch((error) => console.error(error));
    }, 1000); // fetch every 1 second

    return () => clearInterval(intervalId); // clean up on component unmount
  }, []);

  return (
    <div className="max-w-[900px] w-full px-4 pb-4">
      <div
        className={`flex flex-col rounded-2xl text-slate-200 
              ${getStatusColor(statusLevel)} w-full  px-5 py-4 gap-y-1`}
      >
        <div className="text-2xl md:text-3xl">
          STATUS{" "}
          <p className="font-bold text-[26px] md:text-3xl">{statusLevel}</p>
        </div>
        <p className="text-xl">{statusMessage}</p>
      </div>
    </div>
  );
};

export default Status;
