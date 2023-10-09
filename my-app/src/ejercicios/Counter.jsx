import { useEffect, useState, useRef } from "react";
import Button from "./Button";
import CounterDisplay from "./CounterDisplay";


// eslint-disable-next-line react/prop-types
export default function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef(null);

  useEffect(() => {
    if (!directionRef.current) {
      const direction = counter > initialValue ? 'up' : 'down';
      console.log(`La dirección del cambio es: ${direction}`);
    }
  }, [counter, initialValue]);

  const handleCounterIncrement = () => setCounter(counter + 1);
  const handleCounterDecrement = () => setCounter(counter - 1);
  const handleCounterReset = () => setCounter(initialValue);
  return (
    <div>
      <CounterDisplay counter={counter} />
      <Button onClick={handleCounterIncrement} label={"Increment"} />
      <Button onClick={handleCounterDecrement} label={"Decrement"} />
      <Button onClick={handleCounterReset} label={"Reset"} />
    </div>
  );
}
