import { useState, useEffect } from "react";
import classes from './Clock.module.scss'

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return <h2 className={classes.clock}>Current time: {date.toLocaleTimeString()}</h2>;
}
