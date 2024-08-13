import React, { useEffect, useState } from "react";
import "../css/loading.css";

function Loading() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <h1 className="loading-text">Counting Every Moment{dots}</h1>
      <p className="loading-subtext">CountWithMe</p>
    </div>
  );
}

export default Loading;
