import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(
    0
    // localStorage.getItem("count") ? localStorage.getItem("count") : 0
  );

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  useEffect(function () {
    // localStorage.setItem("count", count);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="row">
          <div className="col text-center mt-5">
            <h1>{count}</h1>
            <div>
              {count <= 0 ? (
                ""
              ) : (
                <button className="btn" onClick={decreaseCount}>
                  -
                </button>
              )}
              <button className="btn" onClick={increaseCount}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
