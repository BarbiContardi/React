/* eslint-disable react/prop-types */

import { useState } from "react";

export default function Container({ title, children }) {
    const [collapse, setCollapse] = useState(false)
    function handleToggleCollapse(){
        setCollapse((t) => !t)
    }
    
  return (
    <div>
      <div className={"bg-white border-solid border-2 border-red-700"}>
        {title}<button onClick={handleToggleCollapse} className={"bg-white border-solid border-2 border-red-700"}>Toggle</button>
      </div>
      {collapse && <div>{children}</div>}
    </div>
  );
}
