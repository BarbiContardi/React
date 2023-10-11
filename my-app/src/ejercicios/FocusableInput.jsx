import { useEffect, useRef } from "react";
import { InputGroup, FormControl } from 'react-bootstrap';

export default function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <h2>Focus</h2>
      <InputGroup>
        <FormControl type="text" ref={inputRef} />
      </InputGroup>
    </div>
  );
}
