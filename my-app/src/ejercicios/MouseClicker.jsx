export default function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.currentTarget.name);
  }
  function handleImgClicker(event){
    console.log(event.target.src)
  }
  return (
    <button name="one" onClick={handleButtonClick}>
      Click Me!
      <img src="./public/vite.svg" height={24} width={24} onClick={handleImgClicker} />
    </button>
  );
}
//se sigue imprimiendo el name al hacer click en la imagen porque ésta esta dentro del boton
//al hacer click se hace "bubble" hasta llegar al event del boton y se imprime