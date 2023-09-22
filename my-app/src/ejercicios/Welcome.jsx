import Age from "./Age"; 
// eslint-disable-next-line react/prop-types
export default function Welcome({ name, age }) {
  if (name === "John" && age > 18 && age < 65) {
    return (
      <div>
        <p>Welcome, <strong>{name}</strong>!</p>
        <Age age={age} />
      </div>
    );
  } else {
    return (
      <div>
        <p>Welcome, <strong>{name}</strong>!</p>
      </div>
    );
  }
}
