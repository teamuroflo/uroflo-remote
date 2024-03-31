import { useEffect, useState } from "react";
import axios from "axios";

const PatientInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mrn, setMRN] = useState("");
  let [dob, setDOB] = useState("");
  const [sex, setSex] = useState("");
  const [contactA, setContactA] = useState("");
  const [contactB, setContactB] = useState("");
  const [activeTime, setActiveTime] = useState(0);

  function convertMinutes(minutes) {
    let days = Math.floor(minutes / (60 * 24));
    minutes -= days * 60 * 24;
    let hours = Math.floor(minutes / 60);
    minutes -= hours * 60;
    return { days, hours, minutes };
  }

  function calculateAge(dob) {
    const dobDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - dobDate.getFullYear();
    const m = today.getMonth() - dobDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
      age--;
    }

    age = isNaN(age) ? "" : age;
    return age.toString();
  }

  let age = calculateAge(dob);
  let { days, hours, minutes } = convertMinutes(activeTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get("https://uroflo.loca.lt/patient") // replace with your API endpoint
        .then((response) => setFirstName(response.data.firstname)) // replace 'rate' with the actual key in the response
        .catch((error) => console.error(error));
    }, 1000); // fetch every 1 second

    return () => clearInterval(intervalId); // clean up on component unmount
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get("https://uroflo.loca.lt/patient") // replace with your API endpoint
        .then((response) => setLastName(response.data.lastname)) // replace 'rate' with the actual key in the response
        .catch((error) => console.error(error));
    }, 1000); // fetch every 1 second

    return () => clearInterval(intervalId); // clean up on component unmount
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get("https://uroflo.loca.lt/patient") // replace with your API endpoint
        .then((response) => setMRN(response.data.MRN)) // replace 'rate' with the actual key in the response
        .catch((error) => console.error(error));
    }, 1000); // fetch every 1 second

    return () => clearInterval(intervalId); // clean up on component unmount
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get("https://uroflo.loca.lt/patient") // replace with your API endpoint
        .then((response) => setDOB(response.data.DOB)) // replace 'rate' with the actual key in the response
        .catch((error) => console.error(error));
    }, 1000); // fetch every 1 second

    return () => clearInterval(intervalId); // clean up on component unmount
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get("https://uroflo.loca.lt/patient") // replace with your API endpoint
        .then((response) => setSex(response.data.sex)) // replace 'rate' with the actual key in the response
        .catch((error) => console.error(error));
    }, 1000); // fetch every 1 second

    return () => clearInterval(intervalId); // clean up on component unmount
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get("https://uroflo.loca.lt/patient") // replace with your API endpoint
        .then((response) => setContactA(response.data.contact_A)) // replace 'rate' with the actual key in the response
        .catch((error) => console.error(error));
    }, 1000); // fetch every 1 second

    return () => clearInterval(intervalId); // clean up on component unmount
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get("https://uroflo.loca.lt/patient") // replace with your API endpoint
        .then((response) => setContactB(response.data.contact_B)) // replace 'rate' with the actual key in the response
        .catch((error) => console.error(error));
    }, 1000); // fetch every 1 second

    return () => clearInterval(intervalId); // clean up on component unmount
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get("https://uroflo.loca.lt/system") // replace with your API endpoint
        .then((response) => setActiveTime(response.data.active_time)) // replace 'rate' with the actual key in the response
        .catch((error) => console.error(error));
    }, 1000); // fetch every 1 second

    return () => clearInterval(intervalId); // clean up on component unmount
  }, []);

  return (
    <div className="max-w-[900px] w-full p-4 flex flex-row text-slate-200">
      <div className="h-full w-[60%] flex flex-col items-start justify-end">
        <div className="text-lg md:text-xl flex flex-col items-start">
          <p className="text-2xl md:text-3xl font-bold">
            {lastName}, {firstName} ({age} {sex})
          </p>
          <p>MRN: {mrn}</p>
          <p>DOB: {dob}</p>
          <p className="md:hidden">
            Active Time: {days} d {hours} h {minutes} min
          </p>
          <p className="md:hidden">CONTACT A: {contactA}</p>
          <p className="md:hidden">CONTACT B: {contactB}</p>
        </div>
      </div>
      <div className="h-full w-[40%] hidden md:flex flex-col items-end justify-end">
        <div className="text-xl flex flex-col items-end">
          <p>
            {days} d {hours} h {minutes} min ACTIVE
          </p>
          <p>CONTACT A: {contactA}</p>
          <p>CONTACT B: {contactB}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
