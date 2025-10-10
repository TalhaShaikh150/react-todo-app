import React, { useEffect, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setTimer(new Date().toLocaleTimeString);
  //   }, 1000);
  // }, []);
  console.log(new Date().toLocaleTimeString)
  return <div>{timer}</div>;
};

export default Timer;
