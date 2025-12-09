import { useContext, useState } from "react";
import { allData } from "./App";

function Display1() {
  const { val1,val2 } = useContext(allData);

  const [myName, setMyName] = useState("Name");

  return (
    <>
      <h2>I've received from parent: {val1} {val2}</h2>
      <h2>Display1  {myName}</h2>
      
      <button onClick={() => setMyName("Updated Name")}>Click Me!</button>
    </>
  );
}

export default Display1;
