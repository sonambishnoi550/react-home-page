import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Sonam");

  const add = () => {
    setCount(count + 1);
  };

  const subtract = () => {
    setCount(count - 1);
  };

  const changeName = () => {
    setName("komal");
  };

  return (
    <div>
      
      <div>
        <h1 className="flex justify-center text-6xl font-bold pt-10">Counter: {count}</h1>
        <button onClick={add} className="flex justify-center mx-auto pt-6 text-4xl font-bold">
          Add
        </button>
        <button onClick={subtract} className="flex justify-center mx-auto pt-6 text-4xl font-bold">
          Subtract
        </button>
      </div>


      <div>
        <h1 className="flex justify-center  text-4xl font-bold pt-10">Hello, {name}!</h1>
        <button
          onClick={changeName}
          className="flex justify-center mx-auto pt-6 text-4xl font-bold"
        >
          Change Name
        </button>
      </div>
    </div>
  );
}

export default Counter;
