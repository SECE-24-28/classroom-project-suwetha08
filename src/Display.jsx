import { useContext } from "react";
import { allData } from "./App";
import Display1 from "./Display1";

function Display() {
  const { val1, val2, arr, person, receive } = useContext(allData);

  const myData = "I am from Display";

  return (
    <>
      
      <h1>Hello {val1}</h1>
      <h2>{val2}</h2>

      <h2>Array elements</h2>
      <ul>
        {arr.map((d, ind) => (
          <li key={ind}>{d}</li>
        ))}
      </ul>

      <h2>{person.name} - {person.gender}</h2>

      <button onClick={() => receive(myData)}>Send to Parent</button>
        <h2>--------------------------------</h2>
      <Display1 />
    </>
  );
}

export default Display;
