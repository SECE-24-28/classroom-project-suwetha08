import { createContext, useState } from "react";
import Display from "./Display";

export const allData = createContext();

function App() {
  const [data, setData] = useState("");

  const val1 = "demo val1";
  const val2 = 25;
  const arr = [1, 2, 3];
  const person = { name: "suwetha", gender: "Female" };

  const receive = (d) => {
    setData(d);
  };

  return (
    <allData.Provider value={{ val1, val2, arr, person, receive }}>
      <h1>Welcome</h1>
      <h2>Received from Child: {data}</h2>
        <h2>----------------------------------</h2>
      <Display />
    </allData.Provider>
  
  );
}

export default App;
