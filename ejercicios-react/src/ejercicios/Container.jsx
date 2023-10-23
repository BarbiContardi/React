/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Container({ title, children }) {
  const [collapse, setCollapse] = useState(false);
  function handleToggleCollapse() {
    setCollapse(!collapse);
  }
  return (
    <div>
      <div>
        {title}
        <button onClick={handleToggleCollapse}>Toggle</button>
      </div>
      {collapse && <div>{children}</div>}
    </div>
  );
}
