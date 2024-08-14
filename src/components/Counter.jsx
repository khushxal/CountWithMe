import React, { useEffect, useState } from "react";

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

  function resetCounter() {
    if (window.confirm("This will reset the counter")) {
      setData({ ...data, countername: "Unnamed Counter" });
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
      localStorage.setItem("multiply", data.multiply);
      localStorage.setItem("countername", data.countername);
    },
    [count, data.multiply, data.countername]
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center text-dark mt-5">
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
          <div className="d-flex justify-content-center gap-1 mt-3">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control rounded-3"
                name="multiply"
                id="multiply"
                onChange={handleChange}
                placeholder={"Provide Multiply value"}
                value={data.multiply}
              />
              <label htmlFor="multiply" id="multiply">
                Multiply Value
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
