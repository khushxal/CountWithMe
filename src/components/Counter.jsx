import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(
    localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 0
  );

  const [data, setData] = useState({
    multiply: localStorage.getItem("multiply")
      ? localStorage.getItem("multiply")
      : 0,
    countername: localStorage.getItem("countername") || "unnamed Counter",
  });

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetMultiply() {
    setData({ multiply: 0 });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  useEffect(
    function () {
      localStorage.setItem("count", count);
      localStorage.setItem("multiply", data.multiply);
      localStorage.setItem("countername", data.countername);
    },
    [count, data.multiply, data.countername]
  );

  return (
    <div className="container">
      <div className="card">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <input
              type=""
              unselectable=""
              id="countername"
              name="countername"
              className="countername rounded-3"
              onChange={handleChange}
              value={data.countername}
            />
            <div className="justify-content-center">
              {count <= 0 ? (
                ""
              ) : (
                <button className="btn" onClick={decreaseCount}>
                  <span className="icon">-</span>
                </button>
              )}
              <h1>{data.multiply > 0 ? count * data.multiply : count}</h1>
              <button className="btn" onClick={increaseCount}>
                <span className="icon">+</span>
              </button>
            </div>
          </div>
          <div className="col text-center">
            <span className="fs-5">Multiply Value</span>
            <div className="d-flex justify-content-center gap-1 mt-3">
              <input
                type="text"
                className="rounded-3"
                name="multiply"
                id="multiply"
                onChange={handleChange}
                placeholder={
                  data.multiply === 0 ? "Provide Multiply value" : data.multiply
                }
              />
              <button type="reset" className="btn" onClick={resetMultiply}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
