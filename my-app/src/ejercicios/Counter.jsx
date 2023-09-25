import { useState } from "react";
import Button from "./Button";

export default function Counter(){
    const [counter, setCounter] = useState(0);
    function handleCounterIncrement(){
        setCounter(counter + 1);
    }
    return(
        <div>
            <h2>I have counted to {counter}</h2>
            <Button onClick={handleCounterIncrement} label={'Increment'}/>
        </div>
    )
}