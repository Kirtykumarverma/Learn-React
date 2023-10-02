import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    counter = counter + 1;
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button>Remove Value {counter}</button>
    </>
  );
}

export default App;
