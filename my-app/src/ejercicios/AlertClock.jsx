import Button  from "./Button";


// eslint-disable-next-line react/prop-types
export default function AlertClock({handleClick}) {
 
  return (
    <div>
      <p>Click to see the current time:</p>
      <Button onClick={handleClick} label={"Click Me!"} />
    </div>
  );
}
