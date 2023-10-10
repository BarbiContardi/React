import Age from "./Age";

// eslint-disable-next-line react/prop-types
export default function Welcome({ name}) {
  return (
    <div className="welcome">
      <p>Welcome, {<strong>{name}</strong>}!</p>
      <Age age= {0}/>
    </div>
  );
}
