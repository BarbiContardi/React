import { useState, useEffect, useContext } from "react";
import { LanguageContext } from './LanguajeContext'
import classes from './Clock.module.scss'

export default function Clock() {
  const [date, setDate] = useState(new Date());
  const language = useContext(LanguageContext);

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <h2 className={classes.clock}>
      {language === "en" ? "Current:" : "Actual:"} {date.toLocaleTimeString()}
    </h2>
  );
}

