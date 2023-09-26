export default function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.currentTarget.name);
  }
  return (
    <button name="one" onClick={handleButtonClick}>
      Click Me!
      <img height={24} width={24} />
    </button>
  );
}
