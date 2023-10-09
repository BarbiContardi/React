/* eslint-disable react/prop-types */

export default function Colors({ items }) {
  return (
    <ul>
      {items.map((color, index) => (
        <li key={index}>{color}</li>
      ))}
    </ul>
  );
}