import { useState } from "react";

const Fun1 = () => {
  const [value, setValue] = useState([1, 2, 3, 4, 5]);

  const add = () => {
    setValue((prev) => {
      return [...prev, 6, 7];
    });
  };

  return (
    <>
      <h1>Helloooooooooo</h1>
      {value.map((val, index) => {
        return <h2 key={index}>{val} {index}</h2>;
      })}
      <button onClick={add}>add</button>
    </>
  );
};

export default Fun1;
