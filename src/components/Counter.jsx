import React, { useEffect, useState } from "react";
import Loading from "./Loading";

function Counter() {
  const [count, setCount] = useState(
    localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 0
  );

  const [data, setData] = useState({
    multiply: localStorage.getItem("multiply")
      ? localStorage.getItem("multiply")
      : 0,
    countername: localStorage.getItem("countername") || "Unnamed Counter",
  });

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetMultiply() {
    setData({ ...data, multiply: 0 });
  }

  function resetCounterName() {
    setData({ ...data, countername: "Unnamed Counter" });
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
      <div className="row">
        <div className="col-12 text-center text-dark mt-5">
          <input
            type=""
            id="countername"
            name="countername"
            className="countername rounded-3 w-auto"
            onChange={handleChange}
            value={data.countername}
          />
          <button type="reset" className="btn" onClick={resetCounterName}>
            <img
              src="https://img.icons8.com/?size=100&id=86209&format=png&color=000000"
              height={30}
              width={30}
              alt=""
            />
          </button>
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
        <div className="col text-center mb-5">
          <span className="fs-5">Multiply Value</span>
          <div className="d-flex justify-content-center gap-1 mt-3">
            <input
              type="text"
              className="rounded-3"
              name="multiply"
              id="multiply"
              onChange={handleChange}
              placeholder={"Provide Multiply value"}
              value={data.multiply}
            />
            <button type="reset" className="btn" onClick={resetMultiply}>
              <img
                src="https://img.icons8.com/?size=100&id=86209&format=png&color=000000"
                height={30}
                width={30}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
