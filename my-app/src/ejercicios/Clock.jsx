import { useState, useEffect } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return <h2>Current time: {date.toLocaleTimeString()}</h2>;
}
