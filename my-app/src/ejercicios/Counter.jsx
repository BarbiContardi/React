import { useEffect, useState, useRef, useCallback } from "react";
import Button from "./Button";
import CounterDisplay from "./CounterDisplay";


// eslint-disable-next-line react/prop-types
export default function Counter({ initialValue = 0 }) {
  const MyStyle ={
    backgroundColor: 'blue',
    color: 'white',
    border: '3px solid aqua',
  }
  const [counter, setCounter] = useState(initialValue);
  const directionRef = useRef(null);

  useEffect(() => {
    if (!directionRef.current) {
      const direction = counter > initialValue ? 'up' : 'down';
      console.log(`La dirección del cambio es: ${direction}`);
    }
  }, [counter, initialValue]);

  const handleCounterIncrement = useCallback(function handleCounterIncrement(){
    setCounter((counter) => counter + 1)
  }, []);
  const handleCounterDecrement = useCallback(function handleCounterDecrement(){
    setCounter((counter) => counter - 1)
  }, []);
  const handleCounterReset = useCallback(function handleCounterReset(){
    setCounter(initialValue)
  }, [initialValue]);
  return (
    <div style={MyStyle}>
      <CounterDisplay counter={counter} />
      <Button onClick={handleCounterIncrement} label={"Increment"} />
      <Button onClick={handleCounterDecrement} label={"Decrement"} />
      <Button onClick={handleCounterReset} label={"Reset"} />
    </div>
  );
}
