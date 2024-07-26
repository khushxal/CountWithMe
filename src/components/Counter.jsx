import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ReplayIcon from "@mui/icons-material/Replay";
import Fab from "@mui/material/Fab";

function Counter() {
  const [count, setCount] = useState(0);

  function increaseHandle() {
    setCount(function () {
      count + 1;
    });
  }

  function resetHandle() {
    setCount(0);
  }

  return (
    <div className="card">
      <div className="counter" onClick={increaseHandle}>
        {count}
      </div>
      <hr />
      <div className="button">
        <Fab>
          <AddIcon fontSize="large" onClick={increaseHandle} />
        </Fab>
        <Fab>
          <ReplayIcon fontSize="large" onClick={resetHandle} />
        </Fab>
      </div>
    </div>
  );
}

export default Counter;
