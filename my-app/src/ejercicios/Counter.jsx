import { useEffect, useState } from "react";
import Button from "./Button";
import CounterDisplay from "./CounterDisplay";

// eslint-disable-next-line react/prop-types
export default function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log("El valor actual es: ", counter);
  }, [counter]);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }
  function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }
  function handleCounterReset() {
    setCounter(initialValue);
  }
  return (
    <div>
      <CounterDisplay counter={counter} />
      <Button onClick={handleCounterIncrement} label={"Increment"} />
      <Button onClick={handleCounterDecrement} label={"Decrement"} />
      <Button onClick={handleCounterReset} label={"Reset"} />
    </div>
  );
}
