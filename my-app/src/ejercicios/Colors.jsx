import Color from './Color';

const Colors = () => {
  const colorList = ['red', 'blue', 'green', 'yellow', 'orange'];

  return (
    <div>
      <h1>Colors List</h1>
      <ul>
        {colorList.map((color, index) => (
          <Color key={index} color={color} />
        ))}
      </ul>
    </div>
  );
};

export default Colors;
