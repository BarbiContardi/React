export default function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.currentTarget.name);
  }
  function handleImgClicker(event){
    console.log(event.currentTarget.src);
    event.stopPropagation();
  }
  return (
    <button name="one" onClick={handleButtonClick}>
      Click Me!
      <img src="/vite.svg" height={24} width={24} onClick={handleImgClicker} />
    </button>
  );
}
