import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(
    localStorage.getItem("count") ? Number(localStorage.getItem("count")) : 0
  );

  const [data, setData] = useState({
    increasevalue: localStorage.getItem("increasevalue")
      ? localStorage.getItem("increasevalue")
      : 0,
    countername: localStorage.getItem("countername") || "Unnamed Counter",
  });

  function increaseCount() {
    if (data.increasevalue > 0) {
      setCount(Number(count) + Number(data.increasevalue));
    } else {
      setCount(count + 1);
    }
  }

  function decreaseCount() {
    if (data.increasevalue > 0) {
      if (Number(count) - Number(data.increasevalue) < 0) {
        setCount(0);
      } else {
        setCount(Number(count) - Number(data.increasevalue));
      }
    } else {
      setCount(count - 1);
    }
  }

  function resetMultiply() {
    setData({ ...data, increasevalue: 0 });
  }

  function resetCounter() {
    if (window.confirm("This will reset the counter")) {
      setData({ increasevalue: 0, countername: "Unnamed Counter" });
      setCount(0);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  useEffect(
    function () {
      localStorage.setItem("count", count);
      localStorage.setItem("increasevalue", data.increasevalue);
      localStorage.setItem("countername", data.countername);
    },
    [count, data.increasevalue, data.countername]
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center text-dark mt-5">
          <div className="d-flex justify-content-center gap-1">
            <div className="form-floating mb-3">
              <input
                type="text"
                id="countername"
                name="countername"
                className="form-control rounded-3"
                onChange={handleChange}
                value={data.countername}
              />
              <label htmlFor="countername">Counter Name</label>
            </div>
            <button type="reset" className="btn" onClick={resetCounter}>
              <img
                src="https://img.icons8.com/?size=100&id=86209&format=png&color=000000"
                height={30}
                width={30}
                alt=""
              />
            </button>
          </div>
          {count <= 0 ? (
            ""
          ) : (
            <button className="btn" onClick={decreaseCount}>
              <span className="icon">-</span>
            </button>
          )}
          <h2>
            {/* {data.increasevalue > 0 && count > 0
              ? Number(count) + Number(data.increasevalue)
              : count} */}
            {count}
          </h2>
          <button className="btn" onClick={increaseCount}>
            <span className="icon">+</span>
          </button>
        </div>
        <div className="col-12 text-center mb-5">
          <div className="d-flex justify-content-center gap-1 mt-3">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control rounded-3"
                name="increasevalue"
                id="increasevalue"
                onChange={handleChange}
                placeholder={"Provide Multiply value"}
                value={data.increasevalue}
              />
              <label htmlFor="increasevalue" id="increasevalue">
                Increase Value
              </label>
            </div>
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
