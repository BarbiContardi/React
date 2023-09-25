import { useState } from "react";
import Button from "./Button";

export default function Counter(){
    const [counter, setCounter] = useState(0);
    function handleCounterIncrement(){
        setCounter((c)=> c + 1);
//se puede usar una arrow function sin problema pero        
//es una práctica es más común y recomendable pasar un valor inmediato como parámetro a la función "setter" para 
//incrementar el contador, ya que hace que el código sea más claro y menos propenso a errores.
    }
    return(
        <div>
            <h2>I have counted to {counter}</h2>
            <Button onClick={handleCounterIncrement} label={'Increment'}/>
        </div>
    )
}