import Button  from "./Button";


export default function AlertClock() {
  function handleShowTime() {
    alert("Current time:" + new Date());
  }
  return (
    <div>
      <p>Click to see the current time:</p>
      <Button onClick={handleShowTime} label={"Click Me!"} />
    </div>
  );
}
