import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const subtract = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 className="flex justify-center text-6xl font-bold pt-10">Counter: {count}</h1>
      <button onClick={add} className="flex justify-center mx-auto pt-6 text-4xl font-bold">add</button>
      <button onClick={subtract} className="flex justify-center mx-auto pt-6 text-4xl font-bold">subtract</button>
    </div>
  );
}

export default Counter;
