import { useState } from "react";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);
  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }
  return (
    <div>
      <h2>I have counted to {counter}</h2>
      <Button onClick={handleCounterIncrement} label={"Increment"} />
    </div>
  );
}
