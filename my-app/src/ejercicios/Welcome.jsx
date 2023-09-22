import Age from "./Age";

// eslint-disable-next-line react/prop-types
export default function Welcome({ name}) {
  return (
    <div>
      <p>Welcome, {<strong>{name}</strong>}!</p>
      <Age age= {33}/>
    </div>
  );
}
