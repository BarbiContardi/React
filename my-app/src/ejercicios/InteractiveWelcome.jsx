import { useState } from "react";
import Welcome from "./Welcome";

export default function InteractiveWelcome() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <Welcome name={inputValue} />
    </div>
  );
}
