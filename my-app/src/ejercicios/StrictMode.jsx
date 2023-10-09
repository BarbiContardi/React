import { useEffect, useRef } from "react";

export default function StrictMode() {
  const strict = useRef(false);

  useEffect(() => {
    if (!strict.current) {
      strict.current = true;
      console.log("El componente se monto por primera vez");
    } else {
      console.log("El componente se actualizo");
    }
  }, []);
  return <div></div>;
}
